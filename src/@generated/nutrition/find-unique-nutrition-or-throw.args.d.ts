import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueNutritionOrThrowArgs {
    where: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
