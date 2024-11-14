import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class DishPlanUncheckedUpdateManyWithoutPlanCookerInput {
    id?: IntFieldUpdateOperationsInput;
    recipeId?: IntFieldUpdateOperationsInput;
    amount?: IntFieldUpdateOperationsInput;
    mealPlanId?: NullableIntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
