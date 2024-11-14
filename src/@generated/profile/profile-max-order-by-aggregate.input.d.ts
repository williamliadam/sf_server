import { SortOrder } from '../prisma/sort-order.enum';
export declare class ProfileMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    nickName?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    goal?: keyof typeof SortOrder;
}
