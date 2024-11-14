import { UserCreateNestedOneWithoutChargeDishPlansInput } from '../user/user-create-nested-one-without-charge-dish-plans.input';
import { MealPlanCreateNestedOneWithoutDishPlansInput } from '../meal-plan/meal-plan-create-nested-one-without-dish-plans.input';
export declare class DishPlanCreateWithoutRecipeInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    planCooker: UserCreateNestedOneWithoutChargeDishPlansInput;
    usedMealPlan?: MealPlanCreateNestedOneWithoutDishPlansInput;
}
