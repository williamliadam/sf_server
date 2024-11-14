import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput } from '../materia-category/materia-category-update-one-required-without-materials-nested.input';
import { IngredientUpdateManyWithoutMaterialNestedInput } from '../ingredient/ingredient-update-many-without-material-nested.input';
export declare class MaterialUpdateWithoutNutritionMatrixInput {
    name?: StringFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    nickName?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    category?: MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput;
    ingredients?: IngredientUpdateManyWithoutMaterialNestedInput;
}
