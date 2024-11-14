import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class MethodScalarWhereInput {
    AND?: Array<MethodScalarWhereInput>;
    OR?: Array<MethodScalarWhereInput>;
    NOT?: Array<MethodScalarWhereInput>;
    id?: IntFilter;
    code?: StringFilter;
    name?: StringFilter;
    desc?: StringFilter;
    recipeId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
