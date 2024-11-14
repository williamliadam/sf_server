import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput } from '../ingredient/ingredient-unchecked-update-many-without-used-recipe-nested.input';
import { MethodUncheckedUpdateManyWithoutUsedRecipeNestedInput } from '../method/method-unchecked-update-many-without-used-recipe-nested.input';
import { DishPlanUncheckedUpdateManyWithoutRecipeNestedInput } from '../dish-plan/dish-plan-unchecked-update-many-without-recipe-nested.input';
export declare class RecipeUncheckedUpdateWithoutUsedDishTemplatesInput {
    id?: IntFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    stars?: IntFieldUpdateOperationsInput;
    authorId?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    ingredients?: IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput;
    methods?: MethodUncheckedUpdateManyWithoutUsedRecipeNestedInput;
    usedDishPlans?: DishPlanUncheckedUpdateManyWithoutRecipeNestedInput;
}
