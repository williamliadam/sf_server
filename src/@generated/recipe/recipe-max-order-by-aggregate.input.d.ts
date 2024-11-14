import { SortOrder } from '../prisma/sort-order.enum';
export declare class RecipeMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    stars?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
