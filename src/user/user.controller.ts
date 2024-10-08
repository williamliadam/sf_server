import { Controller, Get, Post, Body, Param, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }


	@Public()
	@Post()
	create(@Body() userData: CreateUserDto): Promise<UserModel> {
		return this.userService.create(userData);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne({ id: Number(id) });
	}

	@Get('profile')
	getProfile(@Request() req) {
		return req.user;
	}
}
