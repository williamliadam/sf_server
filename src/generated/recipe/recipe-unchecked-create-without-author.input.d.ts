import { IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-used-recipe.input';
import { MethodUncheckedCreateNestedManyWithoutUsedRecipeInput } from '../method/method-unchecked-create-nested-many-without-used-recipe.input';
import { DishPlanUncheckedCreateNestedManyWithoutRecipeInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-recipe.input';
import { DishTemplateUncheckedCreateNestedManyWithoutRecipeInput } from '../dish-template/dish-template-unchecked-create-nested-many-without-recipe.input';
export declare class RecipeUncheckedCreateWithoutAuthorInput {
    id?: number;
    name: string;
    stars: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput;
    methods?: MethodUncheckedCreateNestedManyWithoutUsedRecipeInput;
    usedDishPlans?: DishPlanUncheckedCreateNestedManyWithoutRecipeInput;
    usedDishTemplates?: DishTemplateUncheckedCreateNestedManyWithoutRecipeInput;
}
