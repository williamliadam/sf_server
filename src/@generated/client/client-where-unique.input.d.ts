import { ClientWhereInput } from './client-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ClientWhereUniqueInput {
    id?: number;
    AND?: Array<ClientWhereInput>;
    OR?: Array<ClientWhereInput>;
    NOT?: Array<ClientWhereInput>;
    subcompanyid1span?: StringFilter;
    workcode?: StringFilter;
    jobtitle?: StringFilter;
    departmentidspan?: StringFilter;
    idspan?: StringFilter;
    departmentid?: StringFilter;
    telephone?: StringFilter;
    subcompanyid1?: StringFilter;
    telephonespan?: StringFilter;
    lastname?: StringFilter;
    jobtitlespan?: StringFilter;
    workcodespan?: StringFilter;
    lastnamespan?: StringFilter;
    emailspan?: StringFilter;
    randomFieldIdspan?: StringFilter;
    email?: StringFilter;
    randomFieldId?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
