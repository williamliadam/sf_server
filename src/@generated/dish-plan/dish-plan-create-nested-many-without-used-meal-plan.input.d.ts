import { DishPlanCreateWithoutUsedMealPlanInput } from './dish-plan-create-without-used-meal-plan.input';
import { DishPlanCreateOrConnectWithoutUsedMealPlanInput } from './dish-plan-create-or-connect-without-used-meal-plan.input';
import { DishPlanCreateManyUsedMealPlanInputEnvelope } from './dish-plan-create-many-used-meal-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
export declare class DishPlanCreateNestedManyWithoutUsedMealPlanInput {
    create?: Array<DishPlanCreateWithoutUsedMealPlanInput>;
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutUsedMealPlanInput>;
    createMany?: DishPlanCreateManyUsedMealPlanInputEnvelope;
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
}
