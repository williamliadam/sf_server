import { SortOrder } from '../prisma/sort-order.enum';
import { MaterialCountOrderByAggregateInput } from './material-count-order-by-aggregate.input';
import { MaterialAvgOrderByAggregateInput } from './material-avg-order-by-aggregate.input';
import { MaterialMaxOrderByAggregateInput } from './material-max-order-by-aggregate.input';
import { MaterialMinOrderByAggregateInput } from './material-min-order-by-aggregate.input';
import { MaterialSumOrderByAggregateInput } from './material-sum-order-by-aggregate.input';
export declare class MaterialOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    nickName?: keyof typeof SortOrder;
    materiaCategoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: MaterialCountOrderByAggregateInput;
    _avg?: MaterialAvgOrderByAggregateInput;
    _max?: MaterialMaxOrderByAggregateInput;
    _min?: MaterialMinOrderByAggregateInput;
    _sum?: MaterialSumOrderByAggregateInput;
}
