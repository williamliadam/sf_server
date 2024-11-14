import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMealTypeFieldUpdateOperationsInput } from '../prisma/enum-meal-type-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMyMealPlansNestedInput } from '../user/user-update-one-required-without-my-meal-plans-nested.input';
export declare class MealPlanUpdateWithoutDishPlansInput {
    planTime?: NullableDateTimeFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumMealTypeFieldUpdateOperationsInput;
    createBy?: UserUpdateOneRequiredWithoutMyMealPlansNestedInput;
}
