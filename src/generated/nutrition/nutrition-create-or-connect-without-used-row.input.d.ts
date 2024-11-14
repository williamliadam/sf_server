import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { NutritionCreateWithoutUsedRowInput } from './nutrition-create-without-used-row.input';
export declare class NutritionCreateOrConnectWithoutUsedRowInput {
    where: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
    create: NutritionCreateWithoutUsedRowInput;
}
