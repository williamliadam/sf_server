import { SortOrder } from '../prisma/sort-order.enum';
export declare class BodyDetailAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    weight?: keyof typeof SortOrder;
    height?: keyof typeof SortOrder;
    age?: keyof typeof SortOrder;
    bmi?: keyof typeof SortOrder;
    bmr?: keyof typeof SortOrder;
    tdee?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
