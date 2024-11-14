import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMealTypeFieldUpdateOperationsInput } from '../prisma/enum-meal-type-field-update-operations.input';
import { DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput } from '../dish-plan/dish-plan-unchecked-update-many-without-used-meal-plan-nested.input';
export declare class MealPlanUncheckedUpdateWithoutCreateByInput {
    id?: IntFieldUpdateOperationsInput;
    planTime?: NullableDateTimeFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumMealTypeFieldUpdateOperationsInput;
    dishPlans?: DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput;
}
