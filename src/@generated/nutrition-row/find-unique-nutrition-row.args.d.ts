import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
export declare class FindUniqueNutritionRowArgs {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
}
