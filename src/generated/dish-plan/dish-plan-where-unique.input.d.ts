import { DishPlanWhereInput } from './dish-plan-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';
import { MealPlanNullableRelationFilter } from '../meal-plan/meal-plan-nullable-relation-filter.input';
export declare class DishPlanWhereUniqueInput {
    id?: number;
    AND?: Array<DishPlanWhereInput>;
    OR?: Array<DishPlanWhereInput>;
    NOT?: Array<DishPlanWhereInput>;
    recipeId?: IntFilter;
    amount?: IntFilter;
    planCookerId?: IntFilter;
    mealPlanId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    planCooker?: UserRelationFilter;
    recipe?: RecipeRelationFilter;
    usedMealPlan?: MealPlanNullableRelationFilter;
}
