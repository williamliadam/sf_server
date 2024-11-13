import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionUpdateManyMutationInput } from './nutrition-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NutritionWhereInput } from './nutrition-where.input';

@ArgsType()
export class UpdateManyNutritionArgs {
	@Field(() => NutritionUpdateManyMutationInput, { nullable: false })
	@Type(() => NutritionUpdateManyMutationInput)
	data!: NutritionUpdateManyMutationInput;

	@Field(() => NutritionWhereInput, { nullable: true })
	@Type(() => NutritionWhereInput)
	where?: NutritionWhereInput;
}
