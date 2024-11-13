import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionCreateManyInput } from './nutrition-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNutritionArgs {
	@Field(() => [NutritionCreateManyInput], { nullable: false })
	@Type(() => NutritionCreateManyInput)
	data!: Array<NutritionCreateManyInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
