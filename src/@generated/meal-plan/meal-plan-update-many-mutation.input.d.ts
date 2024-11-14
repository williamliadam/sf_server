import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMealTypeFieldUpdateOperationsInput } from '../prisma/enum-meal-type-field-update-operations.input';
export declare class MealPlanUpdateManyMutationInput {
    planTime?: NullableDateTimeFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumMealTypeFieldUpdateOperationsInput;
}
