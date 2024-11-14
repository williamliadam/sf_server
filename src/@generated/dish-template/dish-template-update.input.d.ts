import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MealTemplateUpdateOneWithoutDishTemplatesNestedInput } from '../meal-template/meal-template-update-one-without-dish-templates-nested.input';
import { RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput } from '../recipe/recipe-update-one-required-without-used-dish-templates-nested.input';
export declare class DishTemplateUpdateInput {
    amount?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    usedMealTemplates?: MealTemplateUpdateOneWithoutDishTemplatesNestedInput;
    recipe?: RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput;
}
