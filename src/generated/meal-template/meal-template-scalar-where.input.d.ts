import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class MealTemplateScalarWhereInput {
    AND?: Array<MealTemplateScalarWhereInput>;
    OR?: Array<MealTemplateScalarWhereInput>;
    NOT?: Array<MealTemplateScalarWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    userId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
