import { SortOrder } from '../prisma/sort-order.enum';
export declare class MethodMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    desc?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
