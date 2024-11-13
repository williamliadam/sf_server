import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChargeDishPlansInput } from './user-create-without-charge-dish-plans.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChargeDishPlansInput } from './user-create-or-connect-without-charge-dish-plans.input';
import { UserUpsertWithoutChargeDishPlansInput } from './user-upsert-without-charge-dish-plans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutChargeDishPlansInput } from './user-update-to-one-with-where-without-charge-dish-plans.input';

@InputType()
export class UserUpdateOneRequiredWithoutChargeDishPlansNestedInput {
	@Field(() => UserCreateWithoutChargeDishPlansInput, { nullable: true })
	@Type(() => UserCreateWithoutChargeDishPlansInput)
	create?: UserCreateWithoutChargeDishPlansInput;

	@Field(() => UserCreateOrConnectWithoutChargeDishPlansInput, {
		nullable: true,
	})
	@Type(() => UserCreateOrConnectWithoutChargeDishPlansInput)
	connectOrCreate?: UserCreateOrConnectWithoutChargeDishPlansInput;

	@Field(() => UserUpsertWithoutChargeDishPlansInput, { nullable: true })
	@Type(() => UserUpsertWithoutChargeDishPlansInput)
	upsert?: UserUpsertWithoutChargeDishPlansInput;

	@Field(() => UserWhereUniqueInput, { nullable: true })
	@Type(() => UserWhereUniqueInput)
	connect?: Prisma.AtLeast<
		UserWhereUniqueInput,
		'id' | 'email' | 'phone' | 'wxId'
	>;

	@Field(() => UserUpdateToOneWithWhereWithoutChargeDishPlansInput, {
		nullable: true,
	})
	@Type(() => UserUpdateToOneWithWhereWithoutChargeDishPlansInput)
	update?: UserUpdateToOneWithWhereWithoutChargeDishPlansInput;
}
