import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutChargeDishPlansNestedInput } from '../user/user-update-one-required-without-charge-dish-plans-nested.input';
import { MealPlanUpdateOneWithoutDishPlansNestedInput } from '../meal-plan/meal-plan-update-one-without-dish-plans-nested.input';
export declare class DishPlanUpdateWithoutRecipeInput {
    amount?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    planCooker?: UserUpdateOneRequiredWithoutChargeDishPlansNestedInput;
    usedMealPlan?: MealPlanUpdateOneWithoutDishPlansNestedInput;
}
