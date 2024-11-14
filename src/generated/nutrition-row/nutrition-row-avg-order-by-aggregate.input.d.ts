import { SortOrder } from '../prisma/sort-order.enum';
export declare class NutritionRowAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    nutirtionId?: keyof typeof SortOrder;
    percent?: keyof typeof SortOrder;
    belongToId?: keyof typeof SortOrder;
}
