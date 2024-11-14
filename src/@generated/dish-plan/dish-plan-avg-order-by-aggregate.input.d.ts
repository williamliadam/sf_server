import { SortOrder } from '../prisma/sort-order.enum';
export declare class DishPlanAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    planCookerId?: keyof typeof SortOrder;
    mealPlanId?: keyof typeof SortOrder;
}
