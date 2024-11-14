import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueNutritionRowArgs {
    where: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
