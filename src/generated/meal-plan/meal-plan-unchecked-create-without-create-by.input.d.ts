import { MealType } from '../prisma/meal-type.enum';
import { DishPlanUncheckedCreateNestedManyWithoutUsedMealPlanInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-used-meal-plan.input';
export declare class MealPlanUncheckedCreateWithoutCreateByInput {
    id?: number;
    planTime?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof MealType;
    dishPlans?: DishPlanUncheckedCreateNestedManyWithoutUsedMealPlanInput;
}
