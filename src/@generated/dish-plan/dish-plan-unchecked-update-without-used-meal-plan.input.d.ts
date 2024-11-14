import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class DishPlanUncheckedUpdateWithoutUsedMealPlanInput {
    id?: IntFieldUpdateOperationsInput;
    recipeId?: IntFieldUpdateOperationsInput;
    amount?: IntFieldUpdateOperationsInput;
    planCookerId?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
