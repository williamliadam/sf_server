import { MealPlanWhereInput } from './meal-plan-where.input';
import { MealPlanOrderByWithRelationInput } from './meal-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanScalarFieldEnum } from './meal-plan-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstMealPlanArgs {
    where?: MealPlanWhereInput;
    orderBy?: Array<MealPlanOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MealPlanScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
