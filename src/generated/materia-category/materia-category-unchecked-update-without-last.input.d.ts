import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUncheckedUpdateManyWithoutCategoryNestedInput } from '../material/material-unchecked-update-many-without-category-nested.input';
import { MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput } from './materia-category-unchecked-update-many-without-last-nested.input';
export declare class MateriaCategoryUncheckedUpdateWithoutLastInput {
    id?: IntFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    materials?: MaterialUncheckedUpdateManyWithoutCategoryNestedInput;
    next?: MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput;
}
