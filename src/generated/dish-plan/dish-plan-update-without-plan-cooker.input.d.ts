import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput } from '../recipe/recipe-update-one-required-without-used-dish-plans-nested.input';
import { MealPlanUpdateOneWithoutDishPlansNestedInput } from '../meal-plan/meal-plan-update-one-without-dish-plans-nested.input';
export declare class DishPlanUpdateWithoutPlanCookerInput {
    amount?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    recipe?: RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput;
    usedMealPlan?: MealPlanUpdateOneWithoutDishPlansNestedInput;
}
