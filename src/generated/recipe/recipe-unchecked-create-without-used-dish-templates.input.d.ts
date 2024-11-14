import { IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-used-recipe.input';
import { MethodUncheckedCreateNestedManyWithoutUsedRecipeInput } from '../method/method-unchecked-create-nested-many-without-used-recipe.input';
import { DishPlanUncheckedCreateNestedManyWithoutRecipeInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-recipe.input';
export declare class RecipeUncheckedCreateWithoutUsedDishTemplatesInput {
    id?: number;
    name: string;
    stars: number;
    authorId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput;
    methods?: MethodUncheckedCreateNestedManyWithoutUsedRecipeInput;
    usedDishPlans?: DishPlanUncheckedCreateNestedManyWithoutRecipeInput;
}
