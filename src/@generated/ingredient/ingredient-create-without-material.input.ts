import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MateriaUnitCreateNestedOneWithoutIngredientsInput } from '../materia-unit/materia-unit-create-nested-one-without-ingredients.input';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';

@InputType()
export class IngredientCreateWithoutMaterialInput {
	@Field(() => Int, { nullable: false })
	amount!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => MateriaUnitCreateNestedOneWithoutIngredientsInput, {
		nullable: false,
	})
	unit!: MateriaUnitCreateNestedOneWithoutIngredientsInput;

	@Field(() => RecipeCreateNestedOneWithoutIngredientsInput, { nullable: true })
	usedRecipe?: RecipeCreateNestedOneWithoutIngredientsInput;
}
