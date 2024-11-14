import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IngredientUncheckedUpdateManyWithoutUnitNestedInput } from '../ingredient/ingredient-unchecked-update-many-without-unit-nested.input';
export declare class MateriaUnitUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    toKilo?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    ingredients?: IngredientUncheckedUpdateManyWithoutUnitNestedInput;
}
