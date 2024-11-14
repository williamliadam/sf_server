import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class DishPlanScalarWhereWithAggregatesInput {
    AND?: Array<DishPlanScalarWhereWithAggregatesInput>;
    OR?: Array<DishPlanScalarWhereWithAggregatesInput>;
    NOT?: Array<DishPlanScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    recipeId?: IntWithAggregatesFilter;
    amount?: IntWithAggregatesFilter;
    planCookerId?: IntWithAggregatesFilter;
    mealPlanId?: IntNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
