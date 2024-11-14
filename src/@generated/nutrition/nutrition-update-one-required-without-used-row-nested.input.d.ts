import { NutritionCreateWithoutUsedRowInput } from './nutrition-create-without-used-row.input';
import { NutritionCreateOrConnectWithoutUsedRowInput } from './nutrition-create-or-connect-without-used-row.input';
import { NutritionUpsertWithoutUsedRowInput } from './nutrition-upsert-without-used-row.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { NutritionUpdateToOneWithWhereWithoutUsedRowInput } from './nutrition-update-to-one-with-where-without-used-row.input';
export declare class NutritionUpdateOneRequiredWithoutUsedRowNestedInput {
    create?: NutritionCreateWithoutUsedRowInput;
    connectOrCreate?: NutritionCreateOrConnectWithoutUsedRowInput;
    upsert?: NutritionUpsertWithoutUsedRowInput;
    connect?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
    update?: NutritionUpdateToOneWithWhereWithoutUsedRowInput;
}
