import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class NutritionRowUncheckedUpdateWithoutBelongMaterialInput {
    id?: IntFieldUpdateOperationsInput;
    nutirtionId?: IntFieldUpdateOperationsInput;
    percent?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}