import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumGoalWithAggregatesFilter } from '../prisma/enum-goal-with-aggregates-filter.input';
export declare class ProfileScalarWhereWithAggregatesInput {
    AND?: Array<ProfileScalarWhereWithAggregatesInput>;
    OR?: Array<ProfileScalarWhereWithAggregatesInput>;
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    avatar?: StringNullableWithAggregatesFilter;
    nickName?: StringNullableWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    goal?: EnumGoalWithAggregatesFilter;
}
