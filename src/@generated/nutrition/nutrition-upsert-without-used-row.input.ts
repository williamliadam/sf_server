import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionUpdateWithoutUsedRowInput } from './nutrition-update-without-used-row.input';
import { Type } from 'class-transformer';
import { NutritionCreateWithoutUsedRowInput } from './nutrition-create-without-used-row.input';
import { NutritionWhereInput } from './nutrition-where.input';

@InputType()
export class NutritionUpsertWithoutUsedRowInput {
	@Field(() => NutritionUpdateWithoutUsedRowInput, { nullable: false })
	@Type(() => NutritionUpdateWithoutUsedRowInput)
	update!: NutritionUpdateWithoutUsedRowInput;

	@Field(() => NutritionCreateWithoutUsedRowInput, { nullable: false })
	@Type(() => NutritionCreateWithoutUsedRowInput)
	create!: NutritionCreateWithoutUsedRowInput;

	@Field(() => NutritionWhereInput, { nullable: true })
	@Type(() => NutritionWhereInput)
	where?: NutritionWhereInput;
}
