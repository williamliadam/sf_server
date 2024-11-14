import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUpdateOneRequiredWithoutIngredientsNestedInput } from '../material/material-update-one-required-without-ingredients-nested.input';
import { MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput } from '../materia-unit/materia-unit-update-one-required-without-ingredients-nested.input';
import { RecipeUpdateOneWithoutIngredientsNestedInput } from '../recipe/recipe-update-one-without-ingredients-nested.input';
export declare class IngredientUpdateInput {
    amount?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    material?: MaterialUpdateOneRequiredWithoutIngredientsNestedInput;
    unit?: MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput;
    usedRecipe?: RecipeUpdateOneWithoutIngredientsNestedInput;
}
