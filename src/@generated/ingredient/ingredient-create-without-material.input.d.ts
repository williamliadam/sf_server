import { MateriaUnitCreateNestedOneWithoutIngredientsInput } from '../materia-unit/materia-unit-create-nested-one-without-ingredients.input';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';
export declare class IngredientCreateWithoutMaterialInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    unit: MateriaUnitCreateNestedOneWithoutIngredientsInput;
    usedRecipe?: RecipeCreateNestedOneWithoutIngredientsInput;
}
