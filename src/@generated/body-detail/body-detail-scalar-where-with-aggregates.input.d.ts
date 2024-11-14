import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class BodyDetailScalarWhereWithAggregatesInput {
    AND?: Array<BodyDetailScalarWhereWithAggregatesInput>;
    OR?: Array<BodyDetailScalarWhereWithAggregatesInput>;
    NOT?: Array<BodyDetailScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    weight?: IntNullableWithAggregatesFilter;
    height?: IntNullableWithAggregatesFilter;
    age?: IntNullableWithAggregatesFilter;
    bmi?: IntNullableWithAggregatesFilter;
    bmr?: IntNullableWithAggregatesFilter;
    tdee?: IntNullableWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
