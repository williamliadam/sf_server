import { SortOrder } from '../prisma/sort-order.enum';
export declare class NutritionRowMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    nutirtionId?: keyof typeof SortOrder;
    percent?: keyof typeof SortOrder;
    belongToId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
