import { SortOrder } from '../prisma/sort-order.enum';
export declare class NutritionRowSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    nutirtionId?: keyof typeof SortOrder;
    percent?: keyof typeof SortOrder;
    belongToId?: keyof typeof SortOrder;
}
