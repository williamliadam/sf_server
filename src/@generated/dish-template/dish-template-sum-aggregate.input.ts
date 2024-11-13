import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DishTemplateSumAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	recipeId?: true;

	@Field(() => Boolean, { nullable: true })
	amount?: true;

	@Field(() => Boolean, { nullable: true })
	mealTemplateId?: true;
}
