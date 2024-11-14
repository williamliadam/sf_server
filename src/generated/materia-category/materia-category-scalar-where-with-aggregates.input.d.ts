import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class MateriaCategoryScalarWhereWithAggregatesInput {
    AND?: Array<MateriaCategoryScalarWhereWithAggregatesInput>;
    OR?: Array<MateriaCategoryScalarWhereWithAggregatesInput>;
    NOT?: Array<MateriaCategoryScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    code?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    lastId?: IntNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
