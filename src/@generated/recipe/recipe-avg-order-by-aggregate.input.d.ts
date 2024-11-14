import { SortOrder } from '../prisma/sort-order.enum';
export declare class RecipeAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    stars?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
}
