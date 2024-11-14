import { DishPlanCreateWithoutUsedMealPlanInput } from './dish-plan-create-without-used-meal-plan.input';
import { DishPlanCreateOrConnectWithoutUsedMealPlanInput } from './dish-plan-create-or-connect-without-used-meal-plan.input';
import { DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput } from './dish-plan-upsert-with-where-unique-without-used-meal-plan.input';
import { DishPlanCreateManyUsedMealPlanInputEnvelope } from './dish-plan-create-many-used-meal-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput } from './dish-plan-update-with-where-unique-without-used-meal-plan.input';
import { DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput } from './dish-plan-update-many-with-where-without-used-meal-plan.input';
import { DishPlanScalarWhereInput } from './dish-plan-scalar-where.input';
export declare class DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput {
    create?: Array<DishPlanCreateWithoutUsedMealPlanInput>;
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutUsedMealPlanInput>;
    upsert?: Array<DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput>;
    createMany?: DishPlanCreateManyUsedMealPlanInputEnvelope;
    set?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    update?: Array<DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput>;
    updateMany?: Array<DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput>;
    deleteMany?: Array<DishPlanScalarWhereInput>;
}
