import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput } from '../dish-template/dish-template-update-many-without-used-meal-templates-nested.input';
export declare class MealTemplateUpdateWithoutCreateByInput {
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    dishTemplates?: DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput;
}
