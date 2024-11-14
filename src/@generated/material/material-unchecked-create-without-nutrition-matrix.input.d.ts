import { IngredientUncheckedCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-material.input';
export declare class MaterialUncheckedCreateWithoutNutritionMatrixInput {
    id?: number;
    name: string;
    code: string;
    nickName: string;
    materiaCategoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutMaterialInput;
}
