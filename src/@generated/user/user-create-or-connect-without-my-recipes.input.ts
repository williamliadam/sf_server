import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMyRecipesInput } from './user-create-without-my-recipes.input';

@InputType()
export class UserCreateOrConnectWithoutMyRecipesInput {
	@Field(() => UserWhereUniqueInput, { nullable: false })
	@Type(() => UserWhereUniqueInput)
	where!: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;

	@Field(() => UserCreateWithoutMyRecipesInput, { nullable: false })
	@Type(() => UserCreateWithoutMyRecipesInput)
	create!: UserCreateWithoutMyRecipesInput;
}
