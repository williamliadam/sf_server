import { MealPlanWhereInput } from './meal-plan-where.input';
import { MealPlanOrderByWithRelationInput } from './meal-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanCountAggregateInput } from './meal-plan-count-aggregate.input';
import { MealPlanAvgAggregateInput } from './meal-plan-avg-aggregate.input';
import { MealPlanSumAggregateInput } from './meal-plan-sum-aggregate.input';
import { MealPlanMinAggregateInput } from './meal-plan-min-aggregate.input';
import { MealPlanMaxAggregateInput } from './meal-plan-max-aggregate.input';
export declare class MealPlanAggregateArgs {
    where?: MealPlanWhereInput;
    orderBy?: Array<MealPlanOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: MealPlanCountAggregateInput;
    _avg?: MealPlanAvgAggregateInput;
    _sum?: MealPlanSumAggregateInput;
    _min?: MealPlanMinAggregateInput;
    _max?: MealPlanMaxAggregateInput;
}
