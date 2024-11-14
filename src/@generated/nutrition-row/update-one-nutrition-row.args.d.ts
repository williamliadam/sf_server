import { NutritionRowUpdateInput } from './nutrition-row-update.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
export declare class UpdateOneNutritionRowArgs {
    data: NutritionRowUpdateInput;
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
}
