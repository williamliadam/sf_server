import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateWithoutCreateByInput } from './meal-plan-update-without-create-by.input';
export declare class MealPlanUpdateWithWhereUniqueWithoutCreateByInput {
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    data: MealPlanUpdateWithoutCreateByInput;
}
