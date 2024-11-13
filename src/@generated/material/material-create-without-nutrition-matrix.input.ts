import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateNestedOneWithoutMaterialsInput } from '../materia-category/materia-category-create-nested-one-without-materials.input';
import { IngredientCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-create-nested-many-without-material.input';

@InputType()
export class MaterialCreateWithoutNutritionMatrixInput {
	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	nickName!: string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => MateriaCategoryCreateNestedOneWithoutMaterialsInput, {
		nullable: false,
	})
	category!: MateriaCategoryCreateNestedOneWithoutMaterialsInput;

	@Field(() => IngredientCreateNestedManyWithoutMaterialInput, {
		nullable: true,
	})
	ingredients?: IngredientCreateNestedManyWithoutMaterialInput;
}
