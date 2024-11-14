import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionRowUpdateManyWithoutBelongMaterialNestedInput } from '../nutrition-row/nutrition-row-update-many-without-belong-material-nested.input';
import { IngredientUpdateManyWithoutMaterialNestedInput } from '../ingredient/ingredient-update-many-without-material-nested.input';
export declare class MaterialUpdateWithoutCategoryInput {
    name?: StringFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    nickName?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    nutritionMatrix?: NutritionRowUpdateManyWithoutBelongMaterialNestedInput;
    ingredients?: IngredientUpdateManyWithoutMaterialNestedInput;
}
