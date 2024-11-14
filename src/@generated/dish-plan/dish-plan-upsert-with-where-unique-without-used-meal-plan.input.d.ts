import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithoutUsedMealPlanInput } from './dish-plan-update-without-used-meal-plan.input';
import { DishPlanCreateWithoutUsedMealPlanInput } from './dish-plan-create-without-used-meal-plan.input';
export declare class DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    update: DishPlanUpdateWithoutUsedMealPlanInput;
    create: DishPlanCreateWithoutUsedMealPlanInput;
}
