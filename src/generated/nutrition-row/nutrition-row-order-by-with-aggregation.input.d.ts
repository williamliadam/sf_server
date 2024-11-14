import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionRowCountOrderByAggregateInput } from './nutrition-row-count-order-by-aggregate.input';
import { NutritionRowAvgOrderByAggregateInput } from './nutrition-row-avg-order-by-aggregate.input';
import { NutritionRowMaxOrderByAggregateInput } from './nutrition-row-max-order-by-aggregate.input';
import { NutritionRowMinOrderByAggregateInput } from './nutrition-row-min-order-by-aggregate.input';
import { NutritionRowSumOrderByAggregateInput } from './nutrition-row-sum-order-by-aggregate.input';
export declare class NutritionRowOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    nutirtionId?: keyof typeof SortOrder;
    percent?: keyof typeof SortOrder;
    belongToId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: NutritionRowCountOrderByAggregateInput;
    _avg?: NutritionRowAvgOrderByAggregateInput;
    _max?: NutritionRowMaxOrderByAggregateInput;
    _min?: NutritionRowMinOrderByAggregateInput;
    _sum?: NutritionRowSumOrderByAggregateInput;
}
