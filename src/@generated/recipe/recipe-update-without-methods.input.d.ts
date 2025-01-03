import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMyRecipesNestedInput } from '../user/user-update-one-required-without-my-recipes-nested.input';
import { IngredientUpdateManyWithoutUsedRecipeNestedInput } from '../ingredient/ingredient-update-many-without-used-recipe-nested.input';
import { DishPlanUpdateManyWithoutRecipeNestedInput } from '../dish-plan/dish-plan-update-many-without-recipe-nested.input';
import { DishTemplateUpdateManyWithoutRecipeNestedInput } from '../dish-template/dish-template-update-many-without-recipe-nested.input';
export declare class RecipeUpdateWithoutMethodsInput {
    name?: StringFieldUpdateOperationsInput;
    stars?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    author?: UserUpdateOneRequiredWithoutMyRecipesNestedInput;
    ingredients?: IngredientUpdateManyWithoutUsedRecipeNestedInput;
    usedDishPlans?: DishPlanUpdateManyWithoutRecipeNestedInput;
    usedDishTemplates?: DishTemplateUpdateManyWithoutRecipeNestedInput;
}
