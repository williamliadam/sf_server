import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionRowCreateWithoutNutirtionInput } from './nutrition-row-create-without-nutirtion.input';

@InputType()
export class NutritionRowCreateOrConnectWithoutNutirtionInput {
	@Field(() => NutritionRowWhereUniqueInput, { nullable: false })
	@Type(() => NutritionRowWhereUniqueInput)
	where!: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;

	@Field(() => NutritionRowCreateWithoutNutirtionInput, { nullable: false })
	@Type(() => NutritionRowCreateWithoutNutirtionInput)
	create!: NutritionRowCreateWithoutNutirtionInput;
}
