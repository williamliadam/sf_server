import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MealPlanMinAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	planTime?: true;

	@Field(() => Boolean, { nullable: true })
	userId?: true;

	@Field(() => Boolean, { nullable: true })
	createdAt?: true;

	@Field(() => Boolean, { nullable: true })
	updatedAt?: true;

	@Field(() => Boolean, { nullable: true })
	type?: true;
}
