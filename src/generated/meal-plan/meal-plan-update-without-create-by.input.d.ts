import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMealTypeFieldUpdateOperationsInput } from '../prisma/enum-meal-type-field-update-operations.input';
import { DishPlanUpdateManyWithoutUsedMealPlanNestedInput } from '../dish-plan/dish-plan-update-many-without-used-meal-plan-nested.input';
export declare class MealPlanUpdateWithoutCreateByInput {
    planTime?: NullableDateTimeFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumMealTypeFieldUpdateOperationsInput;
    dishPlans?: DishPlanUpdateManyWithoutUsedMealPlanNestedInput;
}
