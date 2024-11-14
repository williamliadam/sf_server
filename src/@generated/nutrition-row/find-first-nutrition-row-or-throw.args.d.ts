import { NutritionRowWhereInput } from './nutrition-row-where.input';
import { NutritionRowOrderByWithRelationInput } from './nutrition-row-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowScalarFieldEnum } from './nutrition-row-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstNutritionRowOrThrowArgs {
    where?: NutritionRowWhereInput;
    orderBy?: Array<NutritionRowOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof NutritionRowScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
