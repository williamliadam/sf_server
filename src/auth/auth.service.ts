import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService,
	) { }
	async login(user: Omit<User, 'password'>) {
		const payload = { email: user.email, sub: user.id };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}

	async validateUser(email: string, pass: string): Promise<Omit<User, 'password'> | null> {
		const user = await this.userService.findOne({ email });
		if (user && user.password === pass) {
			const { password, ...result } = user;
			return result;
		}
		return null;
	}
}
