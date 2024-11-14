import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput } from '../recipe/recipe-update-one-required-without-used-dish-templates-nested.input';
export declare class DishTemplateUpdateWithoutUsedMealTemplatesInput {
    amount?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    recipe?: RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput;
}
