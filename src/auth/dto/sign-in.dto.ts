import { IsEmail, IsNotEmpty, isNotEmptyObject } from 'class-validator';

export class SignInDto {
	@IsEmail()
	email: string;

	@IsNotEmpty()
	password: string;
}
