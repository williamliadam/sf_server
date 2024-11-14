import { DishPlanWhereInput } from './dish-plan-where.input';
import { DishPlanOrderByWithRelationInput } from './dish-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanCountAggregateInput } from './dish-plan-count-aggregate.input';
import { DishPlanAvgAggregateInput } from './dish-plan-avg-aggregate.input';
import { DishPlanSumAggregateInput } from './dish-plan-sum-aggregate.input';
import { DishPlanMinAggregateInput } from './dish-plan-min-aggregate.input';
import { DishPlanMaxAggregateInput } from './dish-plan-max-aggregate.input';
export declare class DishPlanAggregateArgs {
    where?: DishPlanWhereInput;
    orderBy?: Array<DishPlanOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: DishPlanCountAggregateInput;
    _avg?: DishPlanAvgAggregateInput;
    _sum?: DishPlanSumAggregateInput;
    _min?: DishPlanMinAggregateInput;
    _max?: DishPlanMaxAggregateInput;
}
