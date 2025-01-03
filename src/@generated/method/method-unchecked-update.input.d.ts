import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class MethodUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    desc?: StringFieldUpdateOperationsInput;
    recipeId?: NullableIntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
