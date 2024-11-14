import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { MealTemplateNullableRelationFilter } from '../meal-template/meal-template-nullable-relation-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';
export declare class DishTemplateWhereInput {
    AND?: Array<DishTemplateWhereInput>;
    OR?: Array<DishTemplateWhereInput>;
    NOT?: Array<DishTemplateWhereInput>;
    id?: IntFilter;
    recipeId?: IntFilter;
    amount?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    mealTemplateId?: IntNullableFilter;
    usedMealTemplates?: MealTemplateNullableRelationFilter;
    recipe?: RecipeRelationFilter;
}
