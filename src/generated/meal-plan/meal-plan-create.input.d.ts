import { MealType } from '../prisma/meal-type.enum';
import { DishPlanCreateNestedManyWithoutUsedMealPlanInput } from '../dish-plan/dish-plan-create-nested-many-without-used-meal-plan.input';
import { UserCreateNestedOneWithoutMyMealPlansInput } from '../user/user-create-nested-one-without-my-meal-plans.input';
export declare class MealPlanCreateInput {
    planTime?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof MealType;
    dishPlans?: DishPlanCreateNestedManyWithoutUsedMealPlanInput;
    createBy: UserCreateNestedOneWithoutMyMealPlansInput;
}
