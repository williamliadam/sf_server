import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowUpdateWithoutBelongMaterialInput } from './nutrition-row-update-without-belong-material.input';
export declare class NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    data: NutritionRowUpdateWithoutBelongMaterialInput;
}
