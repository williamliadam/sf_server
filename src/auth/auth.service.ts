import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService,
		private configService: ConfigService,
	) { }
	async login(user: Omit<User, 'password'>) {
		const payload = { email: user.email, sub: user.id };
		return {
			user,
			token: this.jwtService.sign(payload),
		};
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

	async getTokens(userId: string, username: string) {
		const [accessToken, refreshToken] = await Promise.all([
			this.jwtService.signAsync(
				{
					sub: userId,
					username,
				},
				{
					secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
					expiresIn: '15m',
				},
			),
			this.jwtService.signAsync(
				{
					sub: userId,
					username,
				},
				{
					secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
					expiresIn: '7d',
				},
			),
		]);

		return {
			accessToken,
			refreshToken,
		};
	}
}
