import { BodyDetailWhereInput } from './body-detail-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class BodyDetailWhereUniqueInput {
    id?: number;
    userId?: number;
    AND?: Array<BodyDetailWhereInput>;
    OR?: Array<BodyDetailWhereInput>;
    NOT?: Array<BodyDetailWhereInput>;
    weight?: IntNullableFilter;
    height?: IntNullableFilter;
    age?: IntNullableFilter;
    bmi?: IntNullableFilter;
    bmr?: IntNullableFilter;
    tdee?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: UserRelationFilter;
}
