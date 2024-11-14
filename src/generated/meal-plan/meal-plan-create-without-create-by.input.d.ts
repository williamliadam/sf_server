import { MealType } from '../prisma/meal-type.enum';
import { DishPlanCreateNestedManyWithoutUsedMealPlanInput } from '../dish-plan/dish-plan-create-nested-many-without-used-meal-plan.input';
export declare class MealPlanCreateWithoutCreateByInput {
    planTime?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof MealType;
    dishPlans?: DishPlanCreateNestedManyWithoutUsedMealPlanInput;
}
