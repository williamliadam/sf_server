import {
	Controller,
	Post,
	UseGuards,
	Request,
	Body,
	Inject,
	UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './decorators/public.decorator';
import { UserService } from '../user/user.service';
import { SignupDto } from './dto/signup.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Public()
@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private useService: UserService,
		private mailerService: MailerService,
		@Inject(CACHE_MANAGER) private cacheManager: Cache,
	) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@Post('signup')
	async signup(@Body() signupDto: SignupDto) {
		const { password, code, ...rest } = signupDto;
		// match email and code
		const cacheCode = await this.cacheManager.get(rest.email);
		if (code !== cacheCode) {
			throw new UnauthorizedException();
		}
		await this.cacheManager.del(rest.email);
		const salt = await bcrypt.genSalt();
		const hash = await bcrypt.hash(password, salt);
		return this.useService.create({ ...rest, password: hash });
	}

	@Post('email/verify')
	async verifyEmail(@Body() verifyEmailDto: VerifyEmailDto) {
		const { email } = verifyEmailDto;
		const code = `000000${Math.floor(Math.random() * 999999)}`.slice(-6);
		await this.cacheManager.set(email, code, 30000);
		await this.mailerService.sendMail({
			to: email,
			subject: 'Signup Account',
			template: 'code',
			context: {
				code,
			},
		});
	}
}
