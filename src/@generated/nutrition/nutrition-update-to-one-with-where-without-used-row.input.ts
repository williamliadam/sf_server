import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionWhereInput } from './nutrition-where.input';
import { Type } from 'class-transformer';
import { NutritionUpdateWithoutUsedRowInput } from './nutrition-update-without-used-row.input';

@InputType()
export class NutritionUpdateToOneWithWhereWithoutUsedRowInput {
	@Field(() => NutritionWhereInput, { nullable: true })
	@Type(() => NutritionWhereInput)
	where?: NutritionWhereInput;

	@Field(() => NutritionUpdateWithoutUsedRowInput, { nullable: false })
	@Type(() => NutritionUpdateWithoutUsedRowInput)
	data!: NutritionUpdateWithoutUsedRowInput;
}
