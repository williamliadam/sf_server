import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutChargeDishPlansNestedInput } from '../user/user-update-one-required-without-charge-dish-plans-nested.input';
import { RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput } from '../recipe/recipe-update-one-required-without-used-dish-plans-nested.input';
export declare class DishPlanUpdateWithoutUsedMealPlanInput {
    amount?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    planCooker?: UserUpdateOneRequiredWithoutChargeDishPlansNestedInput;
    recipe?: RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput;
}
