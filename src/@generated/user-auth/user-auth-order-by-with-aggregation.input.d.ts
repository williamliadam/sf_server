import { SortOrder } from '../prisma/sort-order.enum';
import { UserAuthCountOrderByAggregateInput } from './user-auth-count-order-by-aggregate.input';
import { UserAuthAvgOrderByAggregateInput } from './user-auth-avg-order-by-aggregate.input';
import { UserAuthMaxOrderByAggregateInput } from './user-auth-max-order-by-aggregate.input';
import { UserAuthMinOrderByAggregateInput } from './user-auth-min-order-by-aggregate.input';
import { UserAuthSumOrderByAggregateInput } from './user-auth-sum-order-by-aggregate.input';
export declare class UserAuthOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    authType?: keyof typeof SortOrder;
    openId?: keyof typeof SortOrder;
    accessToken?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: UserAuthCountOrderByAggregateInput;
    _avg?: UserAuthAvgOrderByAggregateInput;
    _max?: UserAuthMaxOrderByAggregateInput;
    _min?: UserAuthMinOrderByAggregateInput;
    _sum?: UserAuthSumOrderByAggregateInput;
}
