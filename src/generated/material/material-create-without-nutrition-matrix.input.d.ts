import { MateriaCategoryCreateNestedOneWithoutMaterialsInput } from '../materia-category/materia-category-create-nested-one-without-materials.input';
import { IngredientCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-create-nested-many-without-material.input';
export declare class MaterialCreateWithoutNutritionMatrixInput {
    name: string;
    code: string;
    nickName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: MateriaCategoryCreateNestedOneWithoutMaterialsInput;
    ingredients?: IngredientCreateNestedManyWithoutMaterialInput;
}
