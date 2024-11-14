import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumGoalFieldUpdateOperationsInput } from '../prisma/enum-goal-field-update-operations.input';
export declare class ProfileUpdateManyMutationInput {
    avatar?: NullableStringFieldUpdateOperationsInput;
    nickName?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    goal?: EnumGoalFieldUpdateOperationsInput;
}
