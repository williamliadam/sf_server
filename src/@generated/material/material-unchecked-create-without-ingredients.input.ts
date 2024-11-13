import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput } from '../nutrition-row/nutrition-row-unchecked-create-nested-many-without-belong-material.input';

@InputType()
export class MaterialUncheckedCreateWithoutIngredientsInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	nickName!: string;

	@Field(() => Int, { nullable: false })
	materiaCategoryId!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(
		() => NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput,
		{ nullable: true },
	)
	nutritionMatrix?: NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput;
}
