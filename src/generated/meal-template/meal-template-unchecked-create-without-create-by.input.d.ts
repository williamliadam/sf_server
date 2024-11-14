import { DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput } from '../dish-template/dish-template-unchecked-create-nested-many-without-used-meal-templates.input';
export declare class MealTemplateUncheckedCreateWithoutCreateByInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dishTemplates?: DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput;
}
