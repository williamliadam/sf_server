import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.JWT_SECRET,
		});
	}
	private readonly logger = new Logger(JwtStrategy.name);
	async validate(payload: { sub: string; email: string }) {
		this.logger.log(payload);
		return { userId: payload.sub, email: payload.email };
	}
}
