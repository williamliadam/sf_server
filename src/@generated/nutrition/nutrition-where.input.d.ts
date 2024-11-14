import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NutritionRowListRelationFilter } from '../nutrition-row/nutrition-row-list-relation-filter.input';
export declare class NutritionWhereInput {
    AND?: Array<NutritionWhereInput>;
    OR?: Array<NutritionWhereInput>;
    NOT?: Array<NutritionWhereInput>;
    id?: IntFilter;
    code?: StringFilter;
    name?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    usedRow?: NutritionRowListRelationFilter;
}
