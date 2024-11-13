import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMyRecipesInput } from './user-create-without-my-recipes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMyRecipesInput } from './user-create-or-connect-without-my-recipes.input';
import { UserUpsertWithoutMyRecipesInput } from './user-upsert-without-my-recipes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMyRecipesInput } from './user-update-to-one-with-where-without-my-recipes.input';

@InputType()
export class UserUpdateOneRequiredWithoutMyRecipesNestedInput {
	@Field(() => UserCreateWithoutMyRecipesInput, { nullable: true })
	@Type(() => UserCreateWithoutMyRecipesInput)
	create?: UserCreateWithoutMyRecipesInput;

	@Field(() => UserCreateOrConnectWithoutMyRecipesInput, { nullable: true })
	@Type(() => UserCreateOrConnectWithoutMyRecipesInput)
	connectOrCreate?: UserCreateOrConnectWithoutMyRecipesInput;

	@Field(() => UserUpsertWithoutMyRecipesInput, { nullable: true })
	@Type(() => UserUpsertWithoutMyRecipesInput)
	upsert?: UserUpsertWithoutMyRecipesInput;

	@Field(() => UserWhereUniqueInput, { nullable: true })
	@Type(() => UserWhereUniqueInput)
	connect?: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;

	@Field(() => UserUpdateToOneWithWhereWithoutMyRecipesInput, {
		nullable: true,
	})
	@Type(() => UserUpdateToOneWithWhereWithoutMyRecipesInput)
	update?: UserUpdateToOneWithWhereWithoutMyRecipesInput;
}
