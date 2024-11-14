import { DishPlanCreateWithoutPlanCookerInput } from './dish-plan-create-without-plan-cooker.input';
import { DishPlanCreateOrConnectWithoutPlanCookerInput } from './dish-plan-create-or-connect-without-plan-cooker.input';
import { DishPlanCreateManyPlanCookerInputEnvelope } from './dish-plan-create-many-plan-cooker-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
export declare class DishPlanCreateNestedManyWithoutPlanCookerInput {
    create?: Array<DishPlanCreateWithoutPlanCookerInput>;
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutPlanCookerInput>;
    createMany?: DishPlanCreateManyPlanCookerInputEnvelope;
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
}
