import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MealPlanCountOrderByAggregateInput } from './meal-plan-count-order-by-aggregate.input';
import { MealPlanAvgOrderByAggregateInput } from './meal-plan-avg-order-by-aggregate.input';
import { MealPlanMaxOrderByAggregateInput } from './meal-plan-max-order-by-aggregate.input';
import { MealPlanMinOrderByAggregateInput } from './meal-plan-min-order-by-aggregate.input';
import { MealPlanSumOrderByAggregateInput } from './meal-plan-sum-order-by-aggregate.input';
export declare class MealPlanOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    planTime?: SortOrderInput;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    _count?: MealPlanCountOrderByAggregateInput;
    _avg?: MealPlanAvgOrderByAggregateInput;
    _max?: MealPlanMaxOrderByAggregateInput;
    _min?: MealPlanMinOrderByAggregateInput;
    _sum?: MealPlanSumOrderByAggregateInput;
}
