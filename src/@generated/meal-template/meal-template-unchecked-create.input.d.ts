import { DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput } from '../dish-template/dish-template-unchecked-create-nested-many-without-used-meal-templates.input';
export declare class MealTemplateUncheckedCreateInput {
    id?: number;
    name: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dishTemplates?: DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput;
}
