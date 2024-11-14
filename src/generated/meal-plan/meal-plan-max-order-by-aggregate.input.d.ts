import { SortOrder } from '../prisma/sort-order.enum';
export declare class MealPlanMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    planTime?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
