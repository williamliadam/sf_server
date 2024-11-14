import { MaterialCreateNestedOneWithoutNutritionMatrixInput } from '../material/material-create-nested-one-without-nutrition-matrix.input';
export declare class NutritionRowCreateWithoutNutirtionInput {
    percent: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    belongMaterial: MaterialCreateNestedOneWithoutNutritionMatrixInput;
}
