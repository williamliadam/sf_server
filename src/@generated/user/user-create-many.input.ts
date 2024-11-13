import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserCreateManyInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: true })
	email?: string;

	@Field(() => String, { nullable: true })
	name?: string;

	@Field(() => String, { nullable: false })
	password!: string;

	@Field(() => String, { nullable: true })
	phone?: string;

	@Field(() => String, { nullable: true })
	wxId?: string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => Role, { nullable: true })
	role?: keyof typeof Role;
}
