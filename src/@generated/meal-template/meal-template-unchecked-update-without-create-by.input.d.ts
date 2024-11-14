import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput } from '../dish-template/dish-template-unchecked-update-many-without-used-meal-templates-nested.input';
export declare class MealTemplateUncheckedUpdateWithoutCreateByInput {
    id?: IntFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    dishTemplates?: DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput;
}
