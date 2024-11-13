import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionRowCountAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	nutirtionId?: true;

	@Field(() => Boolean, { nullable: true })
	percent?: true;

	@Field(() => Boolean, { nullable: true })
	belongToId?: true;

	@Field(() => Boolean, { nullable: true })
	createdAt?: true;

	@Field(() => Boolean, { nullable: true })
	updatedAt?: true;

	@Field(() => Boolean, { nullable: true })
	_all?: true;
}
