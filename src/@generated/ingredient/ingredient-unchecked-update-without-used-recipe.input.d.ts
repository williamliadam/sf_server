import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class IngredientUncheckedUpdateWithoutUsedRecipeInput {
    id?: IntFieldUpdateOperationsInput;
    materialId?: IntFieldUpdateOperationsInput;
    amount?: IntFieldUpdateOperationsInput;
    materiaUnitId?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
