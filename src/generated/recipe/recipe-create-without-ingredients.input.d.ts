import { UserCreateNestedOneWithoutMyRecipesInput } from '../user/user-create-nested-one-without-my-recipes.input';
import { MethodCreateNestedManyWithoutUsedRecipeInput } from '../method/method-create-nested-many-without-used-recipe.input';
import { DishPlanCreateNestedManyWithoutRecipeInput } from '../dish-plan/dish-plan-create-nested-many-without-recipe.input';
import { DishTemplateCreateNestedManyWithoutRecipeInput } from '../dish-template/dish-template-create-nested-many-without-recipe.input';
export declare class RecipeCreateWithoutIngredientsInput {
    name: string;
    stars: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutMyRecipesInput;
    methods?: MethodCreateNestedManyWithoutUsedRecipeInput;
    usedDishPlans?: DishPlanCreateNestedManyWithoutRecipeInput;
    usedDishTemplates?: DishTemplateCreateNestedManyWithoutRecipeInput;
}
