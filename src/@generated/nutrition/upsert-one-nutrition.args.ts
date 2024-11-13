import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionCreateInput } from './nutrition-create.input';
import { NutritionUpdateInput } from './nutrition-update.input';

@ArgsType()
export class UpsertOneNutritionArgs {
	@Field(() => NutritionWhereUniqueInput, { nullable: false })
	@Type(() => NutritionWhereUniqueInput)
	where!: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;

	@Field(() => NutritionCreateInput, { nullable: false })
	@Type(() => NutritionCreateInput)
	create!: NutritionCreateInput;

	@Field(() => NutritionUpdateInput, { nullable: false })
	@Type(() => NutritionUpdateInput)
	update!: NutritionUpdateInput;
}
