import { MaterialCreateNestedOneWithoutIngredientsInput } from '../material/material-create-nested-one-without-ingredients.input';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';
export declare class IngredientCreateWithoutUnitInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    material: MaterialCreateNestedOneWithoutIngredientsInput;
    usedRecipe?: RecipeCreateNestedOneWithoutIngredientsInput;
}
