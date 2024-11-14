import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class NutritionRowScalarWhereInput {
    AND?: Array<NutritionRowScalarWhereInput>;
    OR?: Array<NutritionRowScalarWhereInput>;
    NOT?: Array<NutritionRowScalarWhereInput>;
    id?: IntFilter;
    nutirtionId?: IntFilter;
    percent?: IntFilter;
    belongToId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
