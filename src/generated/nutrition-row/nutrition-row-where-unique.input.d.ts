import { NutritionRowWhereInput } from './nutrition-row-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NutritionRelationFilter } from '../nutrition/nutrition-relation-filter.input';
import { MaterialRelationFilter } from '../material/material-relation-filter.input';
export declare class NutritionRowWhereUniqueInput {
    id?: number;
    AND?: Array<NutritionRowWhereInput>;
    OR?: Array<NutritionRowWhereInput>;
    NOT?: Array<NutritionRowWhereInput>;
    nutirtionId?: IntFilter;
    percent?: IntFilter;
    belongToId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    nutirtion?: NutritionRelationFilter;
    belongMaterial?: MaterialRelationFilter;
}
