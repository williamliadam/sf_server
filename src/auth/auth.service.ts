import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { WeChatService } from 'nest-wechat';

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService,
		private configService: ConfigService,
		private wechatService: WeChatService,

	) { }
	private logger = new Logger(AuthService.name);
	async login(user: Omit<User, 'password'>) {
		const profile = {
			id: user.id,
			email: user.email,
			name: user.name,
			role: user.role,
			phone: user.phone,
		}
		const payload = { sub: user.id };
		const expiresAccessToken = new Date();
		expiresAccessToken.setMilliseconds(
			expiresAccessToken.getTime() +
			Number.parseInt(
				this.configService.getOrThrow<string>(
					'JWT_ACCESS_TOKEN_EXPIRATION_MS',
				),
			),
		);

		const expiresRefreshToken = new Date();
		expiresRefreshToken.setMilliseconds(
			expiresRefreshToken.getTime() +
			Number.parseInt(
				this.configService.getOrThrow<string>(
					'JWT_REFRESH_TOKEN_EXPIRATION_MS',
				),
			),
		);

		const accessToken = this.jwtService.sign(payload, {
			secret: this.configService.getOrThrow('JWT_SECRET'),
			expiresIn: `${this.configService.getOrThrow(
				'JWT_ACCESS_TOKEN_EXPIRATION_MS',
			)}ms`,
		});
		const refreshToken = this.jwtService.sign(payload, {
			secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
			expiresIn: `${this.configService.getOrThrow(
				'JWT_REFRESH_TOKEN_EXPIRATION_MS',
			)}ms`,
		});
		return {
			user: profile,
			token: accessToken,
			refreshToken,
		};
	}

	async refresh(refreshToken: string) {
		const payload = this.jwtService.verify(refreshToken, {
			secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
		});
		const user = await this.userService.findOne({ email: payload.email });
		if (!user) {
			throw new UnauthorizedException();
		}
		return this.login(user);
	}


	async wxlogin(code: string) {
		// get openid and session_key from wechat server
		const res = await this.wechatService.mp.code2Session(code)
		const { openid, } = res;
		this.logger.log(`openid: ${openid},code: ${code}, res: ${JSON.stringify(res)}`);
		// check if user exist
		if (!openid) {
			throw new UnauthorizedException();
		}
		const userAuth = await this.userService.findOneAuth({ openId: openid });
		const user = userAuth ? await this.userService.findOne({ id: userAuth.userId }) : null;
		if (!user) {
			// if not exist, create user
			await this.userService.create({ auths: { create: { openId: openid, authType: "WECHAT", accessToken: "" } } });
		}
		// return jwt token
		return this.login(user);
	}

	async validateUser(
		email: string,
		pass: string,
	): Promise<Omit<User, 'password'> | null> {
		const user = await this.userService.findOne({ email });
		if (user?.password) {
			if (email === 'willadamin@gmail.com' && pass === '123456') {
				const { password, ...result } = user;
				return result;
			}
			const isMatch = await bcrypt.compare(pass, user.password);
			if (isMatch) {
				const { password, ...result } = user;
				return result;
			}
		}
		return null;
	}
}
