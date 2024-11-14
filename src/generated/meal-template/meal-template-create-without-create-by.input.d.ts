import { DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput } from '../dish-template/dish-template-create-nested-many-without-used-meal-templates.input';
export declare class MealTemplateCreateWithoutCreateByInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dishTemplates?: DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput;
}
