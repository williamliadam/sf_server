import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeNullableRelationFilter } from '../recipe/recipe-nullable-relation-filter.input';
export declare class MethodWhereInput {
    AND?: Array<MethodWhereInput>;
    OR?: Array<MethodWhereInput>;
    NOT?: Array<MethodWhereInput>;
    id?: IntFilter;
    code?: StringFilter;
    name?: StringFilter;
    desc?: StringFilter;
    recipeId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    usedRecipe?: RecipeNullableRelationFilter;
}
