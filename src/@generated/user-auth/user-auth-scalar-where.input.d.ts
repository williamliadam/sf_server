import { IntFilter } from '../prisma/int-filter.input';
import { EnumAuthTypeFilter } from '../prisma/enum-auth-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class UserAuthScalarWhereInput {
    AND?: Array<UserAuthScalarWhereInput>;
    OR?: Array<UserAuthScalarWhereInput>;
    NOT?: Array<UserAuthScalarWhereInput>;
    id?: IntFilter;
    userId?: IntFilter;
    authType?: EnumAuthTypeFilter;
    openId?: StringFilter;
    accessToken?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
