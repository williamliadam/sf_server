import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './decorators/public.decorator';
import { UserService } from '../user/user.service';
import { SignupDto } from './dto/signup.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Public()
@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private useService: UserService,
		private mailerService: MailerService
	) { }

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@Post("signup")
	async signup(@Body() signupDto: SignupDto) {
		const { password, ...rest } = signupDto;
		await this.mailerService.sendMail({
			to: rest.email,
			subject: 'Signup Account',
			template: 'code', // The `.pug` or `.hbs` extension is appended automatically.
			context: {  // Data to be sent to template engine.
				code: 'cf1a3f828287',
				username: 'john doe',
			},
		})
		const salt = await bcrypt.genSalt();
		const hash = await bcrypt.hash(password, salt);
		return this.useService.create({ ...rest, password: hash })
	}

}
