import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DishPlanMaxAggregateInput {
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

	@Field(() => Boolean, { nullable: true })
	createdAt?: true;

	@Field(() => Boolean, { nullable: true })
	updatedAt?: true;
}
