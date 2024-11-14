import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUncheckedUpdateManyWithoutCategoryNestedInput } from '../material/material-unchecked-update-many-without-category-nested.input';
import { MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput } from './materia-category-unchecked-update-many-without-last-nested.input';
export declare class MateriaCategoryUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    lastId?: NullableIntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    materials?: MaterialUncheckedUpdateManyWithoutCategoryNestedInput;
    next?: MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput;
}
