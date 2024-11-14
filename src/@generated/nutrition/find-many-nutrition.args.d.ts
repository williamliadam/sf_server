import { NutritionWhereInput } from './nutrition-where.input';
import { NutritionOrderByWithRelationInput } from './nutrition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { NutritionScalarFieldEnum } from './nutrition-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindManyNutritionArgs {
    where?: NutritionWhereInput;
    orderBy?: Array<NutritionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof NutritionScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
