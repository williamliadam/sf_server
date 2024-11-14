import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanCreateWithoutDishPlansInput } from './meal-plan-create-without-dish-plans.input';
export declare class MealPlanCreateOrConnectWithoutDishPlansInput {
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    create: MealPlanCreateWithoutDishPlansInput;
}
