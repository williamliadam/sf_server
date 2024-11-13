import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowWhereInput } from './nutrition-row-where.input';

@InputType()
export class NutritionRowListRelationFilter {
	@Field(() => NutritionRowWhereInput, { nullable: true })
	every?: NutritionRowWhereInput;

	@Field(() => NutritionRowWhereInput, { nullable: true })
	some?: NutritionRowWhereInput;

	@Field(() => NutritionRowWhereInput, { nullable: true })
	none?: NutritionRowWhereInput;
}
