import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() userData: CreateUserDto): Promise<UserModel> {
		return this.userService.create(userData);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne({ id: Number(id) });
	}
}
