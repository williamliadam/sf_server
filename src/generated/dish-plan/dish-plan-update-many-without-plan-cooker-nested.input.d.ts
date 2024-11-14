import { DishPlanCreateWithoutPlanCookerInput } from './dish-plan-create-without-plan-cooker.input';
import { DishPlanCreateOrConnectWithoutPlanCookerInput } from './dish-plan-create-or-connect-without-plan-cooker.input';
import { DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput } from './dish-plan-upsert-with-where-unique-without-plan-cooker.input';
import { DishPlanCreateManyPlanCookerInputEnvelope } from './dish-plan-create-many-plan-cooker-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput } from './dish-plan-update-with-where-unique-without-plan-cooker.input';
import { DishPlanUpdateManyWithWhereWithoutPlanCookerInput } from './dish-plan-update-many-with-where-without-plan-cooker.input';
import { DishPlanScalarWhereInput } from './dish-plan-scalar-where.input';
export declare class DishPlanUpdateManyWithoutPlanCookerNestedInput {
    create?: Array<DishPlanCreateWithoutPlanCookerInput>;
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutPlanCookerInput>;
    upsert?: Array<DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput>;
    createMany?: DishPlanCreateManyPlanCookerInputEnvelope;
    set?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    update?: Array<DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput>;
    updateMany?: Array<DishPlanUpdateManyWithWhereWithoutPlanCookerInput>;
    deleteMany?: Array<DishPlanScalarWhereInput>;
}
