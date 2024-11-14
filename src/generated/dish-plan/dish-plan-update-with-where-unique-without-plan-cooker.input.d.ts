import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithoutPlanCookerInput } from './dish-plan-update-without-plan-cooker.input';
export declare class DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    data: DishPlanUpdateWithoutPlanCookerInput;
}
