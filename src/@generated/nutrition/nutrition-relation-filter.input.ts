import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionWhereInput } from './nutrition-where.input';

@InputType()
export class NutritionRelationFilter {
	@Field(() => NutritionWhereInput, { nullable: true })
	is?: NutritionWhereInput;

	@Field(() => NutritionWhereInput, { nullable: true })
	isNot?: NutritionWhereInput;
}
