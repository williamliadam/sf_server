import { MaterialCreateWithoutNutritionMatrixInput } from './material-create-without-nutrition-matrix.input';
import { MaterialCreateOrConnectWithoutNutritionMatrixInput } from './material-create-or-connect-without-nutrition-matrix.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
export declare class MaterialCreateNestedOneWithoutNutritionMatrixInput {
    create?: MaterialCreateWithoutNutritionMatrixInput;
    connectOrCreate?: MaterialCreateOrConnectWithoutNutritionMatrixInput;
    connect?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
}
