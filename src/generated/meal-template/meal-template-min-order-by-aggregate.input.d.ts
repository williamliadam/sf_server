import { SortOrder } from '../prisma/sort-order.enum';
export declare class MealTemplateMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}