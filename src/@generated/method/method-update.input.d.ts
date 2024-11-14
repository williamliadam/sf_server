import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeUpdateOneWithoutMethodsNestedInput } from '../recipe/recipe-update-one-without-methods-nested.input';
export declare class MethodUpdateInput {
    code?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    desc?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    usedRecipe?: RecipeUpdateOneWithoutMethodsNestedInput;
}
