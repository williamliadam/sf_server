import { DishPlanWhereInput } from './dish-plan-where.input';
import { DishPlanOrderByWithRelationInput } from './dish-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanScalarFieldEnum } from './dish-plan-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstDishPlanArgs {
    where?: DishPlanWhereInput;
    orderBy?: Array<DishPlanOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DishPlanScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
