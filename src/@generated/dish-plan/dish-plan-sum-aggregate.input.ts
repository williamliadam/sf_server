import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DishPlanSumAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	recipeId?: true;

	@Field(() => Boolean, { nullable: true })
	amount?: true;

	@Field(() => Boolean, { nullable: true })
	planCookerId?: true;

	@Field(() => Boolean, { nullable: true })
	mealPlanId?: true;
}
