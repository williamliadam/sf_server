import { MealTemplateCreateNestedOneWithoutDishTemplatesInput } from '../meal-template/meal-template-create-nested-one-without-dish-templates.input';
import { RecipeCreateNestedOneWithoutUsedDishTemplatesInput } from '../recipe/recipe-create-nested-one-without-used-dish-templates.input';
export declare class DishTemplateCreateInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    usedMealTemplates?: MealTemplateCreateNestedOneWithoutDishTemplatesInput;
    recipe: RecipeCreateNestedOneWithoutUsedDishTemplatesInput;
}
