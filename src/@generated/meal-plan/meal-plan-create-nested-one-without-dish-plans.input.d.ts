import { MealPlanCreateWithoutDishPlansInput } from './meal-plan-create-without-dish-plans.input';
import { MealPlanCreateOrConnectWithoutDishPlansInput } from './meal-plan-create-or-connect-without-dish-plans.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
export declare class MealPlanCreateNestedOneWithoutDishPlansInput {
    create?: MealPlanCreateWithoutDishPlansInput;
    connectOrCreate?: MealPlanCreateOrConnectWithoutDishPlansInput;
    connect?: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
}
