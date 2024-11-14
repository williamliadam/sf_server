import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutBodyDetailNestedInput } from '../user/user-update-one-required-without-body-detail-nested.input';
export declare class BodyDetailUpdateInput {
    weight?: NullableIntFieldUpdateOperationsInput;
    height?: NullableIntFieldUpdateOperationsInput;
    age?: NullableIntFieldUpdateOperationsInput;
    bmi?: NullableIntFieldUpdateOperationsInput;
    bmr?: NullableIntFieldUpdateOperationsInput;
    tdee?: NullableIntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    user?: UserUpdateOneRequiredWithoutBodyDetailNestedInput;
}
