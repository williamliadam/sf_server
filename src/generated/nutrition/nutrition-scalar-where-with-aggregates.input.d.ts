import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class NutritionScalarWhereWithAggregatesInput {
    AND?: Array<NutritionScalarWhereWithAggregatesInput>;
    OR?: Array<NutritionScalarWhereWithAggregatesInput>;
    NOT?: Array<NutritionScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    code?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
