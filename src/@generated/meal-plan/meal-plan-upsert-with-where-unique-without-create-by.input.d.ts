import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateWithoutCreateByInput } from './meal-plan-update-without-create-by.input';
import { MealPlanCreateWithoutCreateByInput } from './meal-plan-create-without-create-by.input';
export declare class MealPlanUpsertWithWhereUniqueWithoutCreateByInput {
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    update: MealPlanUpdateWithoutCreateByInput;
    create: MealPlanCreateWithoutCreateByInput;
}
