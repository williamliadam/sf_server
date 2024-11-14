import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
export declare class DishTemplateScalarWhereWithAggregatesInput {
    AND?: Array<DishTemplateScalarWhereWithAggregatesInput>;
    OR?: Array<DishTemplateScalarWhereWithAggregatesInput>;
    NOT?: Array<DishTemplateScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    recipeId?: IntWithAggregatesFilter;
    amount?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    mealTemplateId?: IntNullableWithAggregatesFilter;
}
