import { IsEmail, IsNotEmpty, isNotEmptyObject } from 'class-validator';

export class SignupDto {
	@IsEmail()
	email: string;

	@IsNotEmpty()
	password: string;

	@IsNotEmpty()
	code: string;

	name?: string;
}
