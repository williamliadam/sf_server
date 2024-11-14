import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BodyDetailCountOrderByAggregateInput } from './body-detail-count-order-by-aggregate.input';
import { BodyDetailAvgOrderByAggregateInput } from './body-detail-avg-order-by-aggregate.input';
import { BodyDetailMaxOrderByAggregateInput } from './body-detail-max-order-by-aggregate.input';
import { BodyDetailMinOrderByAggregateInput } from './body-detail-min-order-by-aggregate.input';
import { BodyDetailSumOrderByAggregateInput } from './body-detail-sum-order-by-aggregate.input';
export declare class BodyDetailOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    weight?: SortOrderInput;
    height?: SortOrderInput;
    age?: SortOrderInput;
    bmi?: SortOrderInput;
    bmr?: SortOrderInput;
    tdee?: SortOrderInput;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: BodyDetailCountOrderByAggregateInput;
    _avg?: BodyDetailAvgOrderByAggregateInput;
    _max?: BodyDetailMaxOrderByAggregateInput;
    _min?: BodyDetailMinOrderByAggregateInput;
    _sum?: BodyDetailSumOrderByAggregateInput;
}
