import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUpdateOneRequiredWithoutIngredientsNestedInput } from '../material/material-update-one-required-without-ingredients-nested.input';
import { RecipeUpdateOneWithoutIngredientsNestedInput } from '../recipe/recipe-update-one-without-ingredients-nested.input';
export declare class IngredientUpdateWithoutUnitInput {
    amount?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    material?: MaterialUpdateOneRequiredWithoutIngredientsNestedInput;
    usedRecipe?: RecipeUpdateOneWithoutIngredientsNestedInput;
}
