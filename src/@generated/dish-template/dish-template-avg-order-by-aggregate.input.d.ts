import { SortOrder } from '../prisma/sort-order.enum';
export declare class DishTemplateAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    mealTemplateId?: keyof typeof SortOrder;
}
