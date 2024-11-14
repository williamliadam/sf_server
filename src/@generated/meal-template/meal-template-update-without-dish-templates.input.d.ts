import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput } from '../user/user-update-one-required-without-my-meal-templates-nested.input';
export declare class MealTemplateUpdateWithoutDishTemplatesInput {
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    createBy?: UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput;
}
