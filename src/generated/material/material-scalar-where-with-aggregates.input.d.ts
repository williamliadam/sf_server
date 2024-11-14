import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class MaterialScalarWhereWithAggregatesInput {
    AND?: Array<MaterialScalarWhereWithAggregatesInput>;
    OR?: Array<MaterialScalarWhereWithAggregatesInput>;
    NOT?: Array<MaterialScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    code?: StringWithAggregatesFilter;
    nickName?: StringWithAggregatesFilter;
    materiaCategoryId?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
