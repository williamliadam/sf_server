import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMealTypeFieldUpdateOperationsInput } from '../prisma/enum-meal-type-field-update-operations.input';
export declare class MealPlanUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput;
    planTime?: NullableDateTimeFieldUpdateOperationsInput;
    userId?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumMealTypeFieldUpdateOperationsInput;
}
