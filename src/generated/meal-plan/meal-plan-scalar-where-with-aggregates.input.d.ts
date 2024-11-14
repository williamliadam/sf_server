import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumMealTypeWithAggregatesFilter } from '../prisma/enum-meal-type-with-aggregates-filter.input';
export declare class MealPlanScalarWhereWithAggregatesInput {
    AND?: Array<MealPlanScalarWhereWithAggregatesInput>;
    OR?: Array<MealPlanScalarWhereWithAggregatesInput>;
    NOT?: Array<MealPlanScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    planTime?: DateTimeNullableWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    type?: EnumMealTypeWithAggregatesFilter;
}
