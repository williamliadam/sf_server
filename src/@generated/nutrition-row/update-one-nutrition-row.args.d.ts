import { NutritionRowUpdateInput } from './nutrition-row-update.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneNutritionRowArgs {
    data: NutritionRowUpdateInput;
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
