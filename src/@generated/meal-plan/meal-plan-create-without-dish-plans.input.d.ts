import { MealType } from '../prisma/meal-type.enum';
import { UserCreateNestedOneWithoutMyMealPlansInput } from '../user/user-create-nested-one-without-my-meal-plans.input';
export declare class MealPlanCreateWithoutDishPlansInput {
    planTime?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof MealType;
    createBy: UserCreateNestedOneWithoutMyMealPlansInput;
}
