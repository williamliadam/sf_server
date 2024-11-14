import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowUpdateWithoutBelongMaterialInput } from './nutrition-row-update-without-belong-material.input';
import { NutritionRowCreateWithoutBelongMaterialInput } from './nutrition-row-create-without-belong-material.input';
export declare class NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    update: NutritionRowUpdateWithoutBelongMaterialInput;
    create: NutritionRowCreateWithoutBelongMaterialInput;
}
