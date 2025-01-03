import { NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput } from '../nutrition-row/nutrition-row-unchecked-create-nested-many-without-belong-material.input';
import { IngredientUncheckedCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-material.input';
export declare class MaterialUncheckedCreateInput {
    id?: number;
    name: string;
    code: string;
    nickName: string;
    materiaCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nutritionMatrix?: NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutMaterialInput;
}
