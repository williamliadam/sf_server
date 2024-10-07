import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

  @Public()
	@HttpCode(HttpStatus.OK)
	@Post('login')
	signIn(@Body() signInDto: SignInDto) {
		return this.authService.signIn(signInDto.email, signInDto.password);
	}
}
