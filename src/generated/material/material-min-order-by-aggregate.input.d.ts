import { SortOrder } from '../prisma/sort-order.enum';
export declare class MaterialMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    nickName?: keyof typeof SortOrder;
    materiaCategoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
