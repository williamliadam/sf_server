import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowCreateInput } from './nutrition-row-create.input';
import { NutritionRowUpdateInput } from './nutrition-row-update.input';
export declare class UpsertOneNutritionRowArgs {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    create: NutritionRowCreateInput;
    update: NutritionRowUpdateInput;
}
