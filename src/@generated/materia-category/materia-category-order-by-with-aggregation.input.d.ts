import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MateriaCategoryCountOrderByAggregateInput } from './materia-category-count-order-by-aggregate.input';
import { MateriaCategoryAvgOrderByAggregateInput } from './materia-category-avg-order-by-aggregate.input';
import { MateriaCategoryMaxOrderByAggregateInput } from './materia-category-max-order-by-aggregate.input';
import { MateriaCategoryMinOrderByAggregateInput } from './materia-category-min-order-by-aggregate.input';
import { MateriaCategorySumOrderByAggregateInput } from './materia-category-sum-order-by-aggregate.input';
export declare class MateriaCategoryOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    lastId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: MateriaCategoryCountOrderByAggregateInput;
    _avg?: MateriaCategoryAvgOrderByAggregateInput;
    _max?: MateriaCategoryMaxOrderByAggregateInput;
    _min?: MateriaCategoryMinOrderByAggregateInput;
    _sum?: MateriaCategorySumOrderByAggregateInput;
}
