import { MateriaCategoryCreateNestedOneWithoutMaterialsInput } from '../materia-category/materia-category-create-nested-one-without-materials.input';
import { NutritionRowCreateNestedManyWithoutBelongMaterialInput } from '../nutrition-row/nutrition-row-create-nested-many-without-belong-material.input';
import { IngredientCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-create-nested-many-without-material.input';
export declare class MaterialCreateInput {
    name: string;
    code: string;
    nickName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: MateriaCategoryCreateNestedOneWithoutMaterialsInput;
    nutritionMatrix?: NutritionRowCreateNestedManyWithoutBelongMaterialInput;
    ingredients?: IngredientCreateNestedManyWithoutMaterialInput;
}
