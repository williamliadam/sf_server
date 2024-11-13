import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueNutritionArgs {
	@Field(() => NutritionWhereUniqueInput, { nullable: false })
	@Type(() => NutritionWhereUniqueInput)
	where!: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
}
