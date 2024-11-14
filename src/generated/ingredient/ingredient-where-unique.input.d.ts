import { IngredientWhereInput } from './ingredient-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MaterialRelationFilter } from '../material/material-relation-filter.input';
import { MateriaUnitRelationFilter } from '../materia-unit/materia-unit-relation-filter.input';
import { RecipeNullableRelationFilter } from '../recipe/recipe-nullable-relation-filter.input';
export declare class IngredientWhereUniqueInput {
    id?: number;
    AND?: Array<IngredientWhereInput>;
    OR?: Array<IngredientWhereInput>;
    NOT?: Array<IngredientWhereInput>;
    materialId?: IntFilter;
    amount?: IntFilter;
    materiaUnitId?: IntFilter;
    recipeId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    material?: MaterialRelationFilter;
    unit?: MateriaUnitRelationFilter;
    usedRecipe?: RecipeNullableRelationFilter;
}
