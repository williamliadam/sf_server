import { EnumAuthTypeFieldUpdateOperationsInput } from '../prisma/enum-auth-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAuthsNestedInput } from '../user/user-update-one-required-without-auths-nested.input';
export declare class UserAuthUpdateInput {
    authType?: EnumAuthTypeFieldUpdateOperationsInput;
    openId?: StringFieldUpdateOperationsInput;
    accessToken?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    user?: UserUpdateOneRequiredWithoutAuthsNestedInput;
}
