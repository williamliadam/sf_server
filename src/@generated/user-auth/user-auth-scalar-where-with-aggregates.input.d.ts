import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumAuthTypeWithAggregatesFilter } from '../prisma/enum-auth-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class UserAuthScalarWhereWithAggregatesInput {
    AND?: Array<UserAuthScalarWhereWithAggregatesInput>;
    OR?: Array<UserAuthScalarWhereWithAggregatesInput>;
    NOT?: Array<UserAuthScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
    authType?: EnumAuthTypeWithAggregatesFilter;
    openId?: StringWithAggregatesFilter;
    accessToken?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
