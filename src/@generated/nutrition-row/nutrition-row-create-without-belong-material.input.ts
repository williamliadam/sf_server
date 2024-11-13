import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionCreateNestedOneWithoutUsedRowInput } from '../nutrition/nutrition-create-nested-one-without-used-row.input';

@InputType()
export class NutritionRowCreateWithoutBelongMaterialInput {
	@Field(() => Int, { nullable: false })
	percent!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => NutritionCreateNestedOneWithoutUsedRowInput, { nullable: false })
	nutirtion!: NutritionCreateNestedOneWithoutUsedRowInput;
}
