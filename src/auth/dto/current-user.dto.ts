import { IsEmail, IsNotEmpty } from 'class-validator';

export class CurrentUserDto {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  userId: number
}
