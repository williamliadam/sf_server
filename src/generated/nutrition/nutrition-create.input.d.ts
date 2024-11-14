import { NutritionRowCreateNestedManyWithoutNutirtionInput } from '../nutrition-row/nutrition-row-create-nested-many-without-nutirtion.input';
export declare class NutritionCreateInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    usedRow?: NutritionRowCreateNestedManyWithoutNutirtionInput;
}
