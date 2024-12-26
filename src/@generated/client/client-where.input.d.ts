import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ClientWhereInput {
    AND?: Array<ClientWhereInput>;
    OR?: Array<ClientWhereInput>;
    NOT?: Array<ClientWhereInput>;
    id?: IntFilter;
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
