import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithoutPlanCookerInput } from './dish-plan-update-without-plan-cooker.input';
import { DishPlanCreateWithoutPlanCookerInput } from './dish-plan-create-without-plan-cooker.input';
export declare class DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    update: DishPlanUpdateWithoutPlanCookerInput;
    create: DishPlanCreateWithoutPlanCookerInput;
}
