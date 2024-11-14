import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumGoalFilter } from '../prisma/enum-goal-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class ProfileWhereInput {
    AND?: Array<ProfileWhereInput>;
    OR?: Array<ProfileWhereInput>;
    NOT?: Array<ProfileWhereInput>;
    id?: IntFilter;
    avatar?: StringNullableFilter;
    nickName?: StringNullableFilter;
    userId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    goal?: EnumGoalFilter;
    user?: UserRelationFilter;
}
