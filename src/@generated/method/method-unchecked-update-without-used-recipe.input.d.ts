import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class MethodUncheckedUpdateWithoutUsedRecipeInput {
    id?: IntFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    desc?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
