import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionRowCreateManyInput } from './nutrition-row-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNutritionRowArgs {
	@Field(() => [NutritionRowCreateManyInput], { nullable: false })
	@Type(() => NutritionRowCreateManyInput)
	data!: Array<NutritionRowCreateManyInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
