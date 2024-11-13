import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';
import { DishPlanCreateNestedManyWithoutUsedMealPlanInput } from '../dish-plan/dish-plan-create-nested-many-without-used-meal-plan.input';

@InputType()
export class MealPlanCreateWithoutCreateByInput {
	@Field(() => Date, { nullable: true })
	planTime?: Date | string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => MealType, { nullable: true })
	type?: keyof typeof MealType;

	@Field(() => DishPlanCreateNestedManyWithoutUsedMealPlanInput, {
		nullable: true,
	})
	dishPlans?: DishPlanCreateNestedManyWithoutUsedMealPlanInput;
}
