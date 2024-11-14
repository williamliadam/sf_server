import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NutritionRelationFilter } from '../nutrition/nutrition-relation-filter.input';
import { MaterialRelationFilter } from '../material/material-relation-filter.input';
export declare class NutritionRowWhereInput {
    AND?: Array<NutritionRowWhereInput>;
    OR?: Array<NutritionRowWhereInput>;
    NOT?: Array<NutritionRowWhereInput>;
    id?: IntFilter;
    nutirtionId?: IntFilter;
    percent?: IntFilter;
    belongToId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    nutirtion?: NutritionRelationFilter;
    belongMaterial?: MaterialRelationFilter;
}
