import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutChargeDishPlansInput } from '../user/user-create-nested-one-without-charge-dish-plans.input';
import { MealPlanCreateNestedOneWithoutDishPlansInput } from '../meal-plan/meal-plan-create-nested-one-without-dish-plans.input';

@InputType()
export class DishPlanCreateWithoutRecipeInput {
	@Field(() => Int, { nullable: false })
	amount!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => UserCreateNestedOneWithoutChargeDishPlansInput, {
		nullable: false,
	})
	planCooker!: UserCreateNestedOneWithoutChargeDishPlansInput;

	@Field(() => MealPlanCreateNestedOneWithoutDishPlansInput, { nullable: true })
	usedMealPlan?: MealPlanCreateNestedOneWithoutDishPlansInput;
}
