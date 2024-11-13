import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMyMealTemplatesInput } from './user-create-without-my-meal-templates.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMyMealTemplatesInput } from './user-create-or-connect-without-my-meal-templates.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMyMealTemplatesInput {
	@Field(() => UserCreateWithoutMyMealTemplatesInput, { nullable: true })
	@Type(() => UserCreateWithoutMyMealTemplatesInput)
	create?: UserCreateWithoutMyMealTemplatesInput;

	@Field(() => UserCreateOrConnectWithoutMyMealTemplatesInput, {
		nullable: true,
	})
	@Type(() => UserCreateOrConnectWithoutMyMealTemplatesInput)
	connectOrCreate?: UserCreateOrConnectWithoutMyMealTemplatesInput;

	@Field(() => UserWhereUniqueInput, { nullable: true })
	@Type(() => UserWhereUniqueInput)
	connect?: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;
}
