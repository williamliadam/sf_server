import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, "jwt-refresh") {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromHeader('x-refresh-token'),
			ignoreExpiration: false,
			secretOrKey: process.env.JWT_REFRESH_SECRET,
		});
	}
	async validate(payload: { sub: string; email: string }) {
		return { userId: payload.sub, email: payload.email };
	}
}
