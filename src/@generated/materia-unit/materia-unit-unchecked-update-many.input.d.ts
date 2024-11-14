import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class MateriaUnitUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    toKilo?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
