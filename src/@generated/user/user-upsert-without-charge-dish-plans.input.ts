import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutChargeDishPlansInput } from './user-update-without-charge-dish-plans.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChargeDishPlansInput } from './user-create-without-charge-dish-plans.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutChargeDishPlansInput {
	@Field(() => UserUpdateWithoutChargeDishPlansInput, { nullable: false })
	@Type(() => UserUpdateWithoutChargeDishPlansInput)
	update!: UserUpdateWithoutChargeDishPlansInput;

	@Field(() => UserCreateWithoutChargeDishPlansInput, { nullable: false })
	@Type(() => UserCreateWithoutChargeDishPlansInput)
	create!: UserCreateWithoutChargeDishPlansInput;

	@Field(() => UserWhereInput, { nullable: true })
	@Type(() => UserWhereInput)
	where?: UserWhereInput;
}
