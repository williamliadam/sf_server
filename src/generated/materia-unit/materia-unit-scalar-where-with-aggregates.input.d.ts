import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class MateriaUnitScalarWhereWithAggregatesInput {
    AND?: Array<MateriaUnitScalarWhereWithAggregatesInput>;
    OR?: Array<MateriaUnitScalarWhereWithAggregatesInput>;
    NOT?: Array<MateriaUnitScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    code?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    toKilo?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
