import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionUpdateOneRequiredWithoutUsedRowNestedInput } from '../nutrition/nutrition-update-one-required-without-used-row-nested.input';
import { MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput } from '../material/material-update-one-required-without-nutrition-matrix-nested.input';
export declare class NutritionRowUpdateInput {
    percent?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    nutirtion?: NutritionUpdateOneRequiredWithoutUsedRowNestedInput;
    belongMaterial?: MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput;
}
