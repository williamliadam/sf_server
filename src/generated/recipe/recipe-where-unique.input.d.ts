import { RecipeWhereInput } from './recipe-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IngredientListRelationFilter } from '../ingredient/ingredient-list-relation-filter.input';
import { MethodListRelationFilter } from '../method/method-list-relation-filter.input';
import { DishPlanListRelationFilter } from '../dish-plan/dish-plan-list-relation-filter.input';
import { DishTemplateListRelationFilter } from '../dish-template/dish-template-list-relation-filter.input';
export declare class RecipeWhereUniqueInput {
    id?: number;
    AND?: Array<RecipeWhereInput>;
    OR?: Array<RecipeWhereInput>;
    NOT?: Array<RecipeWhereInput>;
    name?: StringFilter;
    stars?: IntFilter;
    authorId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    author?: UserRelationFilter;
    ingredients?: IngredientListRelationFilter;
    methods?: MethodListRelationFilter;
    usedDishPlans?: DishPlanListRelationFilter;
    usedDishTemplates?: DishTemplateListRelationFilter;
}
