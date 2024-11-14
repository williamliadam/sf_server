import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput } from '../ingredient/ingredient-unchecked-update-many-without-used-recipe-nested.input';
import { DishPlanUncheckedUpdateManyWithoutRecipeNestedInput } from '../dish-plan/dish-plan-unchecked-update-many-without-recipe-nested.input';
import { DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput } from '../dish-template/dish-template-unchecked-update-many-without-recipe-nested.input';
export declare class RecipeUncheckedUpdateWithoutMethodsInput {
    id?: IntFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    stars?: IntFieldUpdateOperationsInput;
    authorId?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    ingredients?: IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput;
    usedDishPlans?: DishPlanUncheckedUpdateManyWithoutRecipeNestedInput;
    usedDishTemplates?: DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput;
}
