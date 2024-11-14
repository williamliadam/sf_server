import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithoutUsedMealPlanInput } from './dish-plan-update-without-used-meal-plan.input';
export declare class DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    data: DishPlanUpdateWithoutUsedMealPlanInput;
}
