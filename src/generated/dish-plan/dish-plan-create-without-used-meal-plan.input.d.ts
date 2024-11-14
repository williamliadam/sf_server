import { UserCreateNestedOneWithoutChargeDishPlansInput } from '../user/user-create-nested-one-without-charge-dish-plans.input';
import { RecipeCreateNestedOneWithoutUsedDishPlansInput } from '../recipe/recipe-create-nested-one-without-used-dish-plans.input';
export declare class DishPlanCreateWithoutUsedMealPlanInput {
    amount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    planCooker: UserCreateNestedOneWithoutChargeDishPlansInput;
    recipe: RecipeCreateNestedOneWithoutUsedDishPlansInput;
}
