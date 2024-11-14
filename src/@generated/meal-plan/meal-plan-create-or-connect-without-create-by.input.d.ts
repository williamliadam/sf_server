import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanCreateWithoutCreateByInput } from './meal-plan-create-without-create-by.input';
export declare class MealPlanCreateOrConnectWithoutCreateByInput {
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    create: MealPlanCreateWithoutCreateByInput;
}
