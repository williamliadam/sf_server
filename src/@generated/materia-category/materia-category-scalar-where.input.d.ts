import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class MateriaCategoryScalarWhereInput {
    AND?: Array<MateriaCategoryScalarWhereInput>;
    OR?: Array<MateriaCategoryScalarWhereInput>;
    NOT?: Array<MateriaCategoryScalarWhereInput>;
    id?: IntFilter;
    code?: StringFilter;
    name?: StringFilter;
    lastId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
