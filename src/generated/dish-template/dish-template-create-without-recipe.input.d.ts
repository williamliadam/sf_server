import { MealTemplateCreateNestedOneWithoutDishTemplatesInput } from '../meal-template/meal-template-create-nested-one-without-dish-templates.input';
export declare class DishTemplateCreateWithoutRecipeInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    usedMealTemplates?: MealTemplateCreateNestedOneWithoutDishTemplatesInput;
}
