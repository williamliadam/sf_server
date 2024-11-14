import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
export declare class FindUniqueNutritionArgs {
    where: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
}
