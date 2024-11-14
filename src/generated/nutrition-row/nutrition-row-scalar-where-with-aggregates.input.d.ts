import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class NutritionRowScalarWhereWithAggregatesInput {
    AND?: Array<NutritionRowScalarWhereWithAggregatesInput>;
    OR?: Array<NutritionRowScalarWhereWithAggregatesInput>;
    NOT?: Array<NutritionRowScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    nutirtionId?: IntWithAggregatesFilter;
    percent?: IntWithAggregatesFilter;
    belongToId?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
