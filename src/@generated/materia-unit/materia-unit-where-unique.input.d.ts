import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IngredientListRelationFilter } from '../ingredient/ingredient-list-relation-filter.input';
export declare class MateriaUnitWhereUniqueInput {
    id?: number;
    code?: string;
    AND?: Array<MateriaUnitWhereInput>;
    OR?: Array<MateriaUnitWhereInput>;
    NOT?: Array<MateriaUnitWhereInput>;
    name?: StringFilter;
    toKilo?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    ingredients?: IngredientListRelationFilter;
}
