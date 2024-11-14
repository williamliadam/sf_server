import { MethodWhereInput } from './method-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeNullableRelationFilter } from '../recipe/recipe-nullable-relation-filter.input';
export declare class MethodWhereUniqueInput {
    id?: number;
    code?: string;
    AND?: Array<MethodWhereInput>;
    OR?: Array<MethodWhereInput>;
    NOT?: Array<MethodWhereInput>;
    name?: StringFilter;
    desc?: StringFilter;
    recipeId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    usedRecipe?: RecipeNullableRelationFilter;
}
