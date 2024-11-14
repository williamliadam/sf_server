import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput } from '../material/material-update-one-required-without-nutrition-matrix-nested.input';
export declare class NutritionRowUpdateWithoutNutirtionInput {
    percent?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    belongMaterial?: MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput;
}
