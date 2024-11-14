import { MaterialCreateWithoutNutritionMatrixInput } from './material-create-without-nutrition-matrix.input';
import { MaterialCreateOrConnectWithoutNutritionMatrixInput } from './material-create-or-connect-without-nutrition-matrix.input';
import { MaterialUpsertWithoutNutritionMatrixInput } from './material-upsert-without-nutrition-matrix.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput } from './material-update-to-one-with-where-without-nutrition-matrix.input';
export declare class MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput {
    create?: MaterialCreateWithoutNutritionMatrixInput;
    connectOrCreate?: MaterialCreateOrConnectWithoutNutritionMatrixInput;
    upsert?: MaterialUpsertWithoutNutritionMatrixInput;
    connect?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    update?: MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput;
}
