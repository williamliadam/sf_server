import { NutritionCreateNestedOneWithoutUsedRowInput } from '../nutrition/nutrition-create-nested-one-without-used-row.input';
import { MaterialCreateNestedOneWithoutNutritionMatrixInput } from '../material/material-create-nested-one-without-nutrition-matrix.input';
export declare class NutritionRowCreateInput {
    percent: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nutirtion: NutritionCreateNestedOneWithoutUsedRowInput;
    belongMaterial: MaterialCreateNestedOneWithoutNutritionMatrixInput;
}
