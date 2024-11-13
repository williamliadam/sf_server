import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionCreateInput } from './nutrition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNutritionArgs {
	@Field(() => NutritionCreateInput, { nullable: false })
	@Type(() => NutritionCreateInput)
	data!: NutritionCreateInput;
}
