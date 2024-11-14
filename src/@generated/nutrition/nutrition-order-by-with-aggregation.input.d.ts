import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionCountOrderByAggregateInput } from './nutrition-count-order-by-aggregate.input';
import { NutritionAvgOrderByAggregateInput } from './nutrition-avg-order-by-aggregate.input';
import { NutritionMaxOrderByAggregateInput } from './nutrition-max-order-by-aggregate.input';
import { NutritionMinOrderByAggregateInput } from './nutrition-min-order-by-aggregate.input';
import { NutritionSumOrderByAggregateInput } from './nutrition-sum-order-by-aggregate.input';
export declare class NutritionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: NutritionCountOrderByAggregateInput;
    _avg?: NutritionAvgOrderByAggregateInput;
    _max?: NutritionMaxOrderByAggregateInput;
    _min?: NutritionMinOrderByAggregateInput;
    _sum?: NutritionSumOrderByAggregateInput;
}
