import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowCreateWithoutBelongMaterialInput } from './nutrition-row-create-without-belong-material.input';
export declare class NutritionRowCreateOrConnectWithoutBelongMaterialInput {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    create: NutritionRowCreateWithoutBelongMaterialInput;
}
