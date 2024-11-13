import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeMinAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	name?: true;

	@Field(() => Boolean, { nullable: true })
	stars?: true;

	@Field(() => Boolean, { nullable: true })
	authorId?: true;

	@Field(() => Boolean, { nullable: true })
	createdAt?: true;

	@Field(() => Boolean, { nullable: true })
	updatedAt?: true;
}
