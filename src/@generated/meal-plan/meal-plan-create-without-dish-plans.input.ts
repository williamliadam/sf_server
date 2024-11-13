import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';
import { UserCreateNestedOneWithoutMyMealPlansInput } from '../user/user-create-nested-one-without-my-meal-plans.input';

@InputType()
export class MealPlanCreateWithoutDishPlansInput {
	@Field(() => Date, { nullable: true })
	planTime?: Date | string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => MealType, { nullable: true })
	type?: keyof typeof MealType;

	@Field(() => UserCreateNestedOneWithoutMyMealPlansInput, { nullable: false })
	createBy!: UserCreateNestedOneWithoutMyMealPlansInput;
}
