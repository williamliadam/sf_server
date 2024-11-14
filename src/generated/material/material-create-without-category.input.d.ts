import { NutritionRowCreateNestedManyWithoutBelongMaterialInput } from '../nutrition-row/nutrition-row-create-nested-many-without-belong-material.input';
import { IngredientCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-create-nested-many-without-material.input';
export declare class MaterialCreateWithoutCategoryInput {
    name: string;
    code: string;
    nickName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nutritionMatrix?: NutritionRowCreateNestedManyWithoutBelongMaterialInput;
    ingredients?: IngredientCreateNestedManyWithoutMaterialInput;
}
