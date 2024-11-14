import { SortOrder } from '../prisma/sort-order.enum';
export declare class PostAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    stars?: keyof typeof SortOrder;
    follows?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
}
