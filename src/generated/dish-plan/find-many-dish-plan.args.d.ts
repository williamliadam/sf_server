import { DishPlanWhereInput } from './dish-plan-where.input';
import { DishPlanOrderByWithRelationInput } from './dish-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanScalarFieldEnum } from './dish-plan-scalar-field.enum';
export declare class FindManyDishPlanArgs {
    where?: DishPlanWhereInput;
    orderBy?: Array<DishPlanOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DishPlanScalarFieldEnum>;
}