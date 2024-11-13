import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionRowCreateInput } from './nutrition-row-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNutritionRowArgs {
	@Field(() => NutritionRowCreateInput, { nullable: false })
	@Type(() => NutritionRowCreateInput)
	data!: NutritionRowCreateInput;
}
