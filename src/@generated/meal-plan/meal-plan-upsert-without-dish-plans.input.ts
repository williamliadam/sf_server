import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanUpdateWithoutDishPlansInput } from './meal-plan-update-without-dish-plans.input';
import { Type } from 'class-transformer';
import { MealPlanCreateWithoutDishPlansInput } from './meal-plan-create-without-dish-plans.input';
import { MealPlanWhereInput } from './meal-plan-where.input';

@InputType()
export class MealPlanUpsertWithoutDishPlansInput {
	@Field(() => MealPlanUpdateWithoutDishPlansInput, { nullable: false })
	@Type(() => MealPlanUpdateWithoutDishPlansInput)
	update!: MealPlanUpdateWithoutDishPlansInput;

	@Field(() => MealPlanCreateWithoutDishPlansInput, { nullable: false })
	@Type(() => MealPlanCreateWithoutDishPlansInput)
	create!: MealPlanCreateWithoutDishPlansInput;

	@Field(() => MealPlanWhereInput, { nullable: true })
	@Type(() => MealPlanWhereInput)
	where?: MealPlanWhereInput;
}
