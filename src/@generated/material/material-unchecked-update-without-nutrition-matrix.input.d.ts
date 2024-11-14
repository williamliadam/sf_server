import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IngredientUncheckedUpdateManyWithoutMaterialNestedInput } from '../ingredient/ingredient-unchecked-update-many-without-material-nested.input';
export declare class MaterialUncheckedUpdateWithoutNutritionMatrixInput {
    id?: IntFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    nickName?: StringFieldUpdateOperationsInput;
    materiaCategoryId?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    ingredients?: IngredientUncheckedUpdateManyWithoutMaterialNestedInput;
}
