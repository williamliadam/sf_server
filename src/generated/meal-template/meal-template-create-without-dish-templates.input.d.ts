import { UserCreateNestedOneWithoutMyMealTemplatesInput } from '../user/user-create-nested-one-without-my-meal-templates.input';
export declare class MealTemplateCreateWithoutDishTemplatesInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createBy: UserCreateNestedOneWithoutMyMealTemplatesInput;
}
