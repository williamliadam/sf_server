import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanCreateWithoutPlanCookerInput } from './dish-plan-create-without-plan-cooker.input';
export declare class DishPlanCreateOrConnectWithoutPlanCookerInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    create: DishPlanCreateWithoutPlanCookerInput;
}
