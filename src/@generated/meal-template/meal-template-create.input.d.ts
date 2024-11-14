import { UserCreateNestedOneWithoutMyMealTemplatesInput } from '../user/user-create-nested-one-without-my-meal-templates.input';
import { DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput } from '../dish-template/dish-template-create-nested-many-without-used-meal-templates.input';
export declare class MealTemplateCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createBy: UserCreateNestedOneWithoutMyMealTemplatesInput;
    dishTemplates?: DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput;
}
