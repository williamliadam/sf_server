import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMyRecipesInput } from './user-create-without-my-recipes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMyRecipesInput } from './user-create-or-connect-without-my-recipes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMyRecipesInput {
	@Field(() => UserCreateWithoutMyRecipesInput, { nullable: true })
	@Type(() => UserCreateWithoutMyRecipesInput)
	create?: UserCreateWithoutMyRecipesInput;

	@Field(() => UserCreateOrConnectWithoutMyRecipesInput, { nullable: true })
	@Type(() => UserCreateOrConnectWithoutMyRecipesInput)
	connectOrCreate?: UserCreateOrConnectWithoutMyRecipesInput;

	@Field(() => UserWhereUniqueInput, { nullable: true })
	@Type(() => UserWhereUniqueInput)
	connect?: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;
}
