import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumGoalFieldUpdateOperationsInput } from '../prisma/enum-goal-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../user/user-update-one-required-without-profile-nested.input';
export declare class ProfileUpdateInput {
    avatar?: NullableStringFieldUpdateOperationsInput;
    nickName?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    goal?: EnumGoalFieldUpdateOperationsInput;
    user?: UserUpdateOneRequiredWithoutProfileNestedInput;
}
