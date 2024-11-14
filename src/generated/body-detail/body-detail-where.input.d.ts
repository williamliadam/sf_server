import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class BodyDetailWhereInput {
    AND?: Array<BodyDetailWhereInput>;
    OR?: Array<BodyDetailWhereInput>;
    NOT?: Array<BodyDetailWhereInput>;
    id?: IntFilter;
    weight?: IntNullableFilter;
    height?: IntNullableFilter;
    age?: IntNullableFilter;
    bmi?: IntNullableFilter;
    bmr?: IntNullableFilter;
    tdee?: IntNullableFilter;
    userId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: UserRelationFilter;
}
