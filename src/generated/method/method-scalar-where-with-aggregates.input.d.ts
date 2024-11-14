import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class MethodScalarWhereWithAggregatesInput {
    AND?: Array<MethodScalarWhereWithAggregatesInput>;
    OR?: Array<MethodScalarWhereWithAggregatesInput>;
    NOT?: Array<MethodScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    code?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    desc?: StringWithAggregatesFilter;
    recipeId?: IntNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
