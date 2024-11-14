import { NutritionUpdateInput } from './nutrition-update.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
export declare class UpdateOneNutritionArgs {
    data: NutritionUpdateInput;
    where: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
}
