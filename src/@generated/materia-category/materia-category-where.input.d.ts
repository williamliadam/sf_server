import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MaterialListRelationFilter } from '../material/material-list-relation-filter.input';
import { MateriaCategoryListRelationFilter } from './materia-category-list-relation-filter.input';
import { MateriaCategoryNullableRelationFilter } from './materia-category-nullable-relation-filter.input';
export declare class MateriaCategoryWhereInput {
    AND?: Array<MateriaCategoryWhereInput>;
    OR?: Array<MateriaCategoryWhereInput>;
    NOT?: Array<MateriaCategoryWhereInput>;
    id?: IntFilter;
    code?: StringFilter;
    name?: StringFilter;
    lastId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    materials?: MaterialListRelationFilter;
    next?: MateriaCategoryListRelationFilter;
    last?: MateriaCategoryNullableRelationFilter;
}
