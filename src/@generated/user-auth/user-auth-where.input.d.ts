import { IntFilter } from '../prisma/int-filter.input';
import { EnumAuthTypeFilter } from '../prisma/enum-auth-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class UserAuthWhereInput {
    AND?: Array<UserAuthWhereInput>;
    OR?: Array<UserAuthWhereInput>;
    NOT?: Array<UserAuthWhereInput>;
    id?: IntFilter;
    userId?: IntFilter;
    authType?: EnumAuthTypeFilter;
    openId?: StringFilter;
    accessToken?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: UserRelationFilter;
}
