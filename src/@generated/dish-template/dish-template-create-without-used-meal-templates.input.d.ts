import { RecipeCreateNestedOneWithoutUsedDishTemplatesInput } from '../recipe/recipe-create-nested-one-without-used-dish-templates.input';
export declare class DishTemplateCreateWithoutUsedMealTemplatesInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recipe: RecipeCreateNestedOneWithoutUsedDishTemplatesInput;
}
