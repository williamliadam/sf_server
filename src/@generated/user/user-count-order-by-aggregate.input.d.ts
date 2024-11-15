import { SortOrder } from '../prisma/sort-order.enum';
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    phone?: keyof typeof SortOrder;
    wxId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
}