import { UserAuthWhereInput } from './user-auth-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumAuthTypeFilter } from '../prisma/enum-auth-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class UserAuthWhereUniqueInput {
    id?: number;
    openId?: string;
    AND?: Array<UserAuthWhereInput>;
    OR?: Array<UserAuthWhereInput>;
    NOT?: Array<UserAuthWhereInput>;
    userId?: IntFilter;
    authType?: EnumAuthTypeFilter;
    accessToken?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: UserRelationFilter;
}
