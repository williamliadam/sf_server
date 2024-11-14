import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowCreateWithoutNutirtionInput } from './nutrition-row-create-without-nutirtion.input';
export declare class NutritionRowCreateOrConnectWithoutNutirtionInput {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    create: NutritionRowCreateWithoutNutirtionInput;
}
