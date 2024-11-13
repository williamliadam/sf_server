import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionCreateWithoutUsedRowInput } from './nutrition-create-without-used-row.input';

@InputType()
export class NutritionCreateOrConnectWithoutUsedRowInput {
	@Field(() => NutritionWhereUniqueInput, { nullable: false })
	@Type(() => NutritionWhereUniqueInput)
	where!: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;

	@Field(() => NutritionCreateWithoutUsedRowInput, { nullable: false })
	@Type(() => NutritionCreateWithoutUsedRowInput)
	create!: NutritionCreateWithoutUsedRowInput;
}
