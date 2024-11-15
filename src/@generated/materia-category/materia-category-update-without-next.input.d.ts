import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUpdateManyWithoutCategoryNestedInput } from '../material/material-update-many-without-category-nested.input';
import { MateriaCategoryUpdateOneWithoutNextNestedInput } from './materia-category-update-one-without-next-nested.input';
export declare class MateriaCategoryUpdateWithoutNextInput {
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    materials?: MaterialUpdateManyWithoutCategoryNestedInput;
    last?: MateriaCategoryUpdateOneWithoutNextNestedInput;
}