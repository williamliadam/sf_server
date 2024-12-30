import { SortOrder } from '../prisma/sort-order.enum';
export declare class UserAuthMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    authType?: keyof typeof SortOrder;
    openId?: keyof typeof SortOrder;
    accessToken?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
