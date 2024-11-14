import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput } from '../user/user-update-one-required-without-my-meal-templates-nested.input';
import { DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput } from '../dish-template/dish-template-update-many-without-used-meal-templates-nested.input';
export declare class MealTemplateUpdateInput {
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    createBy?: UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput;
    dishTemplates?: DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput;
}
