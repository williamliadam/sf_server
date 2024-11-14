import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionUpdateOneRequiredWithoutUsedRowNestedInput } from '../nutrition/nutrition-update-one-required-without-used-row-nested.input';
export declare class NutritionRowUpdateWithoutBelongMaterialInput {
    percent?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    nutirtion?: NutritionUpdateOneRequiredWithoutUsedRowNestedInput;
}
