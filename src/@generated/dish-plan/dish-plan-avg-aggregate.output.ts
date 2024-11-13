import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DishPlanAvgAggregate {
	@Field(() => Float, { nullable: true })
	id?: number;

	@Field(() => Float, { nullable: true })
	recipeId?: number;

	@Field(() => Float, { nullable: true })
	amount?: number;

	@Field(() => Float, { nullable: true })
	planCookerId?: number;

	@Field(() => Float, { nullable: true })
	mealPlanId?: number;
}
