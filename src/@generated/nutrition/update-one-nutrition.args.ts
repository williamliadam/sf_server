import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionUpdateInput } from './nutrition-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';

@ArgsType()
export class UpdateOneNutritionArgs {
	@Field(() => NutritionUpdateInput, { nullable: false })
	@Type(() => NutritionUpdateInput)
	data!: NutritionUpdateInput;

	@Field(() => NutritionWhereUniqueInput, { nullable: false })
	@Type(() => NutritionWhereUniqueInput)
	where!: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
}
