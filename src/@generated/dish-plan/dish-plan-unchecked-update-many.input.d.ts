import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class DishPlanUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput;
    recipeId?: IntFieldUpdateOperationsInput;
    amount?: IntFieldUpdateOperationsInput;
    planCookerId?: IntFieldUpdateOperationsInput;
    mealPlanId?: NullableIntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
