import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBodyDetailInput } from '../user/user-create-nested-one-without-body-detail.input';

@InputType()
export class BodyDetailCreateInput {
	@Field(() => Int, { nullable: true })
	weight?: number;

	@Field(() => Int, { nullable: true })
	height?: number;

	@Field(() => Int, { nullable: true })
	age?: number;

	@Field(() => Int, { nullable: true })
	bmi?: number;

	@Field(() => Int, { nullable: true })
	bmr?: number;

	@Field(() => Int, { nullable: true })
	tdee?: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => UserCreateNestedOneWithoutBodyDetailInput, { nullable: false })
	user!: UserCreateNestedOneWithoutBodyDetailInput;
}
