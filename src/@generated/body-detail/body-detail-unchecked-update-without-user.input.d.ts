import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class BodyDetailUncheckedUpdateWithoutUserInput {
    id?: IntFieldUpdateOperationsInput;
    weight?: NullableIntFieldUpdateOperationsInput;
    height?: NullableIntFieldUpdateOperationsInput;
    age?: NullableIntFieldUpdateOperationsInput;
    bmi?: NullableIntFieldUpdateOperationsInput;
    bmr?: NullableIntFieldUpdateOperationsInput;
    tdee?: NullableIntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
