import { MaterialWhereInput } from './material-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MateriaCategoryRelationFilter } from '../materia-category/materia-category-relation-filter.input';
import { NutritionRowListRelationFilter } from '../nutrition-row/nutrition-row-list-relation-filter.input';
import { IngredientListRelationFilter } from '../ingredient/ingredient-list-relation-filter.input';
export declare class MaterialWhereUniqueInput {
    id?: number;
    code?: string;
    AND?: Array<MaterialWhereInput>;
    OR?: Array<MaterialWhereInput>;
    NOT?: Array<MaterialWhereInput>;
    name?: StringFilter;
    nickName?: StringFilter;
    materiaCategoryId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    category?: MateriaCategoryRelationFilter;
    nutritionMatrix?: NutritionRowListRelationFilter;
    ingredients?: IngredientListRelationFilter;
}
