import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionSumAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;
}
