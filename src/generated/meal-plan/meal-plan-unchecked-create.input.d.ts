import { MealType } from '../prisma/meal-type.enum';
import { DishPlanUncheckedCreateNestedManyWithoutUsedMealPlanInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-used-meal-plan.input';
export declare class MealPlanUncheckedCreateInput {
    id?: number;
    planTime?: Date | string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof MealType;
    dishPlans?: DishPlanUncheckedCreateNestedManyWithoutUsedMealPlanInput;
}
