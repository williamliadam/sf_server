import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput } from '../nutrition-row/nutrition-row-unchecked-update-many-without-belong-material-nested.input';
export declare class MaterialUncheckedUpdateWithoutIngredientsInput {
    id?: IntFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    nickName?: StringFieldUpdateOperationsInput;
    materiaCategoryId?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    nutritionMatrix?: NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput;
}
