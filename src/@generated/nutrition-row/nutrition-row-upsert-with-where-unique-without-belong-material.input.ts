import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionRowUpdateWithoutBelongMaterialInput } from './nutrition-row-update-without-belong-material.input';
import { NutritionRowCreateWithoutBelongMaterialInput } from './nutrition-row-create-without-belong-material.input';

@InputType()
export class NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput {
	@Field(() => NutritionRowWhereUniqueInput, { nullable: false })
	@Type(() => NutritionRowWhereUniqueInput)
	where!: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;

	@Field(() => NutritionRowUpdateWithoutBelongMaterialInput, {
		nullable: false,
	})
	@Type(() => NutritionRowUpdateWithoutBelongMaterialInput)
	update!: NutritionRowUpdateWithoutBelongMaterialInput;

	@Field(() => NutritionRowCreateWithoutBelongMaterialInput, {
		nullable: false,
	})
	@Type(() => NutritionRowCreateWithoutBelongMaterialInput)
	create!: NutritionRowCreateWithoutBelongMaterialInput;
}
