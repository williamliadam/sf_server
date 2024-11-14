import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IngredientListRelationFilter } from '../ingredient/ingredient-list-relation-filter.input';
export declare class MateriaUnitWhereInput {
    AND?: Array<MateriaUnitWhereInput>;
    OR?: Array<MateriaUnitWhereInput>;
    NOT?: Array<MateriaUnitWhereInput>;
    id?: IntFilter;
    code?: StringFilter;
    name?: StringFilter;
    toKilo?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    ingredients?: IngredientListRelationFilter;
}
