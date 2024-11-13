import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionRowUpdateWithoutNutirtionInput } from './nutrition-row-update-without-nutirtion.input';

@InputType()
export class NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput {
	@Field(() => NutritionRowWhereUniqueInput, { nullable: false })
	@Type(() => NutritionRowWhereUniqueInput)
	where!: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;

	@Field(() => NutritionRowUpdateWithoutNutirtionInput, { nullable: false })
	@Type(() => NutritionRowUpdateWithoutNutirtionInput)
	data!: NutritionRowUpdateWithoutNutirtionInput;
}
