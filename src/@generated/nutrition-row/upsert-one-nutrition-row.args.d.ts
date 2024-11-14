import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowCreateInput } from './nutrition-row-create.input';
import { NutritionRowUpdateInput } from './nutrition-row-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneNutritionRowArgs {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    create: NutritionRowCreateInput;
    update: NutritionRowUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
