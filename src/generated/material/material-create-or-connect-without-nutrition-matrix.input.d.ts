import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialCreateWithoutNutritionMatrixInput } from './material-create-without-nutrition-matrix.input';
export declare class MaterialCreateOrConnectWithoutNutritionMatrixInput {
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    create: MaterialCreateWithoutNutritionMatrixInput;
}
