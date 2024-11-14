import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionRowUpdateManyWithoutNutirtionNestedInput } from '../nutrition-row/nutrition-row-update-many-without-nutirtion-nested.input';
export declare class NutritionUpdateInput {
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    usedRow?: NutritionRowUpdateManyWithoutNutirtionNestedInput;
}
