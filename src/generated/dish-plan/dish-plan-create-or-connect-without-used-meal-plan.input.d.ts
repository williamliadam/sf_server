import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanCreateWithoutUsedMealPlanInput } from './dish-plan-create-without-used-meal-plan.input';
export declare class DishPlanCreateOrConnectWithoutUsedMealPlanInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    create: DishPlanCreateWithoutUsedMealPlanInput;
}
