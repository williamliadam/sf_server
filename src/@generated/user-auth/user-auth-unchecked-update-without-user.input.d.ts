import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumAuthTypeFieldUpdateOperationsInput } from '../prisma/enum-auth-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class UserAuthUncheckedUpdateWithoutUserInput {
    id?: IntFieldUpdateOperationsInput;
    authType?: EnumAuthTypeFieldUpdateOperationsInput;
    openId?: StringFieldUpdateOperationsInput;
    accessToken?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
