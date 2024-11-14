import { SortOrder } from '../prisma/sort-order.enum';
export declare class DishPlanMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    planCookerId?: keyof typeof SortOrder;
    mealPlanId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
