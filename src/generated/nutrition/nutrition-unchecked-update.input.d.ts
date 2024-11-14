import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput } from '../nutrition-row/nutrition-row-unchecked-update-many-without-nutirtion-nested.input';
export declare class NutritionUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    usedRow?: NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput;
}
