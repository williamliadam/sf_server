import { ProfileWhereInput } from './profile-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumGoalFilter } from '../prisma/enum-goal-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class ProfileWhereUniqueInput {
    id?: number;
    userId?: number;
    AND?: Array<ProfileWhereInput>;
    OR?: Array<ProfileWhereInput>;
    NOT?: Array<ProfileWhereInput>;
    avatar?: StringNullableFilter;
    nickName?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    goal?: EnumGoalFilter;
    user?: UserRelationFilter;
}
