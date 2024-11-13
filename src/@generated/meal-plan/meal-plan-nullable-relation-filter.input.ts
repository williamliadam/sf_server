import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanWhereInput } from './meal-plan-where.input';

@InputType()
export class MealPlanNullableRelationFilter {
	@Field(() => MealPlanWhereInput, { nullable: true })
	is?: MealPlanWhereInput;

	@Field(() => MealPlanWhereInput, { nullable: true })
	isNot?: MealPlanWhereInput;
}
