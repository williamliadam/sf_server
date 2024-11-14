import { NutritionWhereInput } from './nutrition-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NutritionRowListRelationFilter } from '../nutrition-row/nutrition-row-list-relation-filter.input';
export declare class NutritionWhereUniqueInput {
    id?: number;
    code?: string;
    AND?: Array<NutritionWhereInput>;
    OR?: Array<NutritionWhereInput>;
    NOT?: Array<NutritionWhereInput>;
    name?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    usedRow?: NutritionRowListRelationFilter;
}
