import { NutritionRowUncheckedCreateNestedManyWithoutNutirtionInput } from '../nutrition-row/nutrition-row-unchecked-create-nested-many-without-nutirtion.input';
export declare class NutritionUncheckedCreateInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    usedRow?: NutritionRowUncheckedCreateNestedManyWithoutNutirtionInput;
}
