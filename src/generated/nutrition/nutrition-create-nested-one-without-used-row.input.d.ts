import { NutritionCreateWithoutUsedRowInput } from './nutrition-create-without-used-row.input';
import { NutritionCreateOrConnectWithoutUsedRowInput } from './nutrition-create-or-connect-without-used-row.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
export declare class NutritionCreateNestedOneWithoutUsedRowInput {
    create?: NutritionCreateWithoutUsedRowInput;
    connectOrCreate?: NutritionCreateOrConnectWithoutUsedRowInput;
    connect?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
}
