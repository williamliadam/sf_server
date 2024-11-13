import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMyMealTemplatesInput } from './user-create-without-my-meal-templates.input';

@InputType()
export class UserCreateOrConnectWithoutMyMealTemplatesInput {
	@Field(() => UserWhereUniqueInput, { nullable: false })
	@Type(() => UserWhereUniqueInput)
	where!: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;

	@Field(() => UserCreateWithoutMyMealTemplatesInput, { nullable: false })
	@Type(() => UserCreateWithoutMyMealTemplatesInput)
	create!: UserCreateWithoutMyMealTemplatesInput;
}
