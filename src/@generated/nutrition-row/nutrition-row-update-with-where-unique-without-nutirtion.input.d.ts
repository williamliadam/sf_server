import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowUpdateWithoutNutirtionInput } from './nutrition-row-update-without-nutirtion.input';
export declare class NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    data: NutritionRowUpdateWithoutNutirtionInput;
}
