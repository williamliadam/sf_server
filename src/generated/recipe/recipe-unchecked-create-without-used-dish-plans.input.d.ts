import { IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-used-recipe.input';
import { MethodUncheckedCreateNestedManyWithoutUsedRecipeInput } from '../method/method-unchecked-create-nested-many-without-used-recipe.input';
import { DishTemplateUncheckedCreateNestedManyWithoutRecipeInput } from '../dish-template/dish-template-unchecked-create-nested-many-without-recipe.input';
export declare class RecipeUncheckedCreateWithoutUsedDishPlansInput {
    id?: number;
    name: string;
    stars: number;
    authorId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput;
    methods?: MethodUncheckedCreateNestedManyWithoutUsedRecipeInput;
    usedDishTemplates?: DishTemplateUncheckedCreateNestedManyWithoutRecipeInput;
}
