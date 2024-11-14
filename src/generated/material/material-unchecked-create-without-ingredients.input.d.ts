import { NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput } from '../nutrition-row/nutrition-row-unchecked-create-nested-many-without-belong-material.input';
export declare class MaterialUncheckedCreateWithoutIngredientsInput {
    id?: number;
    name: string;
    code: string;
    nickName: string;
    materiaCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nutritionMatrix?: NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput;
}
