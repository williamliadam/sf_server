import { MaterialCreateNestedOneWithoutIngredientsInput } from '../material/material-create-nested-one-without-ingredients.input';
import { MateriaUnitCreateNestedOneWithoutIngredientsInput } from '../materia-unit/materia-unit-create-nested-one-without-ingredients.input';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';
export declare class IngredientCreateInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    material: MaterialCreateNestedOneWithoutIngredientsInput;
    unit: MateriaUnitCreateNestedOneWithoutIngredientsInput;
    usedRecipe?: RecipeCreateNestedOneWithoutIngredientsInput;
}
