import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DishPlanCountOrderByAggregateInput } from './dish-plan-count-order-by-aggregate.input';
import { DishPlanAvgOrderByAggregateInput } from './dish-plan-avg-order-by-aggregate.input';
import { DishPlanMaxOrderByAggregateInput } from './dish-plan-max-order-by-aggregate.input';
import { DishPlanMinOrderByAggregateInput } from './dish-plan-min-order-by-aggregate.input';
import { DishPlanSumOrderByAggregateInput } from './dish-plan-sum-order-by-aggregate.input';
export declare class DishPlanOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    planCookerId?: keyof typeof SortOrder;
    mealPlanId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: DishPlanCountOrderByAggregateInput;
    _avg?: DishPlanAvgOrderByAggregateInput;
    _max?: DishPlanMaxOrderByAggregateInput;
    _min?: DishPlanMinOrderByAggregateInput;
    _sum?: DishPlanSumOrderByAggregateInput;
}
