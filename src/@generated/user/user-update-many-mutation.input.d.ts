import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
export declare class UserUpdateManyMutationInput {
    email?: NullableStringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    password?: StringFieldUpdateOperationsInput;
    phone?: NullableStringFieldUpdateOperationsInput;
    wxId?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
}
