import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './decorators/public.decorator';
import { UserService } from 'src/user/user.service';
import { SignupDto } from './dto/signup.dto';

@Public()
@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private useService: UserService
	) { }

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@Post("signup")
	async signup(@Body() signupDto: SignupDto) {
		const { password, ...rest } = signupDto;
		const salt = await bcrypt.genSalt();
		const hash = await bcrypt.hash(password, salt);
		return this.useService.create({ ...rest, password: hash })
	}

}
