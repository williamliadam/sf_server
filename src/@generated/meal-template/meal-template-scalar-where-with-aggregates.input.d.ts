import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class MealTemplateScalarWhereWithAggregatesInput {
    AND?: Array<MealTemplateScalarWhereWithAggregatesInput>;
    OR?: Array<MealTemplateScalarWhereWithAggregatesInput>;
    NOT?: Array<MealTemplateScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
