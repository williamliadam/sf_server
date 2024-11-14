import { SortOrder } from '../prisma/sort-order.enum';
export declare class DishTemplateMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    mealTemplateId?: keyof typeof SortOrder;
}
