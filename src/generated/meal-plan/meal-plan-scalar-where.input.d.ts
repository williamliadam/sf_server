import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumMealTypeFilter } from '../prisma/enum-meal-type-filter.input';
export declare class MealPlanScalarWhereInput {
    AND?: Array<MealPlanScalarWhereInput>;
    OR?: Array<MealPlanScalarWhereInput>;
    NOT?: Array<MealPlanScalarWhereInput>;
    id?: IntFilter;
    planTime?: DateTimeNullableFilter;
    userId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    type?: EnumMealTypeFilter;
}
