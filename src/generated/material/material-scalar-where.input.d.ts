import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class MaterialScalarWhereInput {
    AND?: Array<MaterialScalarWhereInput>;
    OR?: Array<MaterialScalarWhereInput>;
    NOT?: Array<MaterialScalarWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    code?: StringFilter;
    nickName?: StringFilter;
    materiaCategoryId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
