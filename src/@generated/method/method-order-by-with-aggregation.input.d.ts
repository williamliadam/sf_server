import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MethodCountOrderByAggregateInput } from './method-count-order-by-aggregate.input';
import { MethodAvgOrderByAggregateInput } from './method-avg-order-by-aggregate.input';
import { MethodMaxOrderByAggregateInput } from './method-max-order-by-aggregate.input';
import { MethodMinOrderByAggregateInput } from './method-min-order-by-aggregate.input';
import { MethodSumOrderByAggregateInput } from './method-sum-order-by-aggregate.input';
export declare class MethodOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    desc?: keyof typeof SortOrder;
    recipeId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: MethodCountOrderByAggregateInput;
    _avg?: MethodAvgOrderByAggregateInput;
    _max?: MethodMaxOrderByAggregateInput;
    _min?: MethodMinOrderByAggregateInput;
    _sum?: MethodSumOrderByAggregateInput;
}
