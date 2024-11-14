import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
export declare class DeleteOneNutritionRowArgs {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
}
