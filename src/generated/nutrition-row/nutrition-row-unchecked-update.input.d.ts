import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class NutritionRowUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    nutirtionId?: IntFieldUpdateOperationsInput;
    percent?: IntFieldUpdateOperationsInput;
    belongToId?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
