import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class ClientScalarWhereWithAggregatesInput {
    AND?: Array<ClientScalarWhereWithAggregatesInput>;
    OR?: Array<ClientScalarWhereWithAggregatesInput>;
    NOT?: Array<ClientScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    subcompanyid1span?: StringWithAggregatesFilter;
    workcode?: StringWithAggregatesFilter;
    jobtitle?: StringWithAggregatesFilter;
    departmentidspan?: StringWithAggregatesFilter;
    idspan?: StringWithAggregatesFilter;
    departmentid?: StringWithAggregatesFilter;
    telephone?: StringWithAggregatesFilter;
    subcompanyid1?: StringWithAggregatesFilter;
    telephonespan?: StringWithAggregatesFilter;
    lastname?: StringWithAggregatesFilter;
    jobtitlespan?: StringWithAggregatesFilter;
    workcodespan?: StringWithAggregatesFilter;
    lastnamespan?: StringWithAggregatesFilter;
    emailspan?: StringWithAggregatesFilter;
    randomFieldIdspan?: StringWithAggregatesFilter;
    email?: StringWithAggregatesFilter;
    randomFieldId?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
