import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowUpdateWithoutNutirtionInput } from './nutrition-row-update-without-nutirtion.input';
import { NutritionRowCreateWithoutNutirtionInput } from './nutrition-row-create-without-nutirtion.input';
export declare class NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    update: NutritionRowUpdateWithoutNutirtionInput;
    create: NutritionRowCreateWithoutNutirtionInput;
}
