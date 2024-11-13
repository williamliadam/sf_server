import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMyMealPlansInput } from './user-create-without-my-meal-plans.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMyMealPlansInput } from './user-create-or-connect-without-my-meal-plans.input';
import { UserUpsertWithoutMyMealPlansInput } from './user-upsert-without-my-meal-plans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMyMealPlansInput } from './user-update-to-one-with-where-without-my-meal-plans.input';

@InputType()
export class UserUpdateOneRequiredWithoutMyMealPlansNestedInput {
	@Field(() => UserCreateWithoutMyMealPlansInput, { nullable: true })
	@Type(() => UserCreateWithoutMyMealPlansInput)
	create?: UserCreateWithoutMyMealPlansInput;

	@Field(() => UserCreateOrConnectWithoutMyMealPlansInput, { nullable: true })
	@Type(() => UserCreateOrConnectWithoutMyMealPlansInput)
	connectOrCreate?: UserCreateOrConnectWithoutMyMealPlansInput;

	@Field(() => UserUpsertWithoutMyMealPlansInput, { nullable: true })
	@Type(() => UserUpsertWithoutMyMealPlansInput)
	upsert?: UserUpsertWithoutMyMealPlansInput;

	@Field(() => UserWhereUniqueInput, { nullable: true })
	@Type(() => UserWhereUniqueInput)
	connect?: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;

	@Field(() => UserUpdateToOneWithWhereWithoutMyMealPlansInput, {
		nullable: true,
	})
	@Type(() => UserUpdateToOneWithWhereWithoutMyMealPlansInput)
	update?: UserUpdateToOneWithWhereWithoutMyMealPlansInput;
}
