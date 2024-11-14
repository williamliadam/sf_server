import { SortOrder } from '../prisma/sort-order.enum';
export declare class PostMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    published?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
