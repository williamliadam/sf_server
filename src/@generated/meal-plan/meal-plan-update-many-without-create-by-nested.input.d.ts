import { MealPlanCreateWithoutCreateByInput } from './meal-plan-create-without-create-by.input';
import { MealPlanCreateOrConnectWithoutCreateByInput } from './meal-plan-create-or-connect-without-create-by.input';
import { MealPlanUpsertWithWhereUniqueWithoutCreateByInput } from './meal-plan-upsert-with-where-unique-without-create-by.input';
import { MealPlanCreateManyCreateByInputEnvelope } from './meal-plan-create-many-create-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateWithWhereUniqueWithoutCreateByInput } from './meal-plan-update-with-where-unique-without-create-by.input';
import { MealPlanUpdateManyWithWhereWithoutCreateByInput } from './meal-plan-update-many-with-where-without-create-by.input';
import { MealPlanScalarWhereInput } from './meal-plan-scalar-where.input';
export declare class MealPlanUpdateManyWithoutCreateByNestedInput {
    create?: Array<MealPlanCreateWithoutCreateByInput>;
    connectOrCreate?: Array<MealPlanCreateOrConnectWithoutCreateByInput>;
    upsert?: Array<MealPlanUpsertWithWhereUniqueWithoutCreateByInput>;
    createMany?: MealPlanCreateManyCreateByInputEnvelope;
    set?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;
    update?: Array<MealPlanUpdateWithWhereUniqueWithoutCreateByInput>;
    updateMany?: Array<MealPlanUpdateManyWithWhereWithoutCreateByInput>;
    deleteMany?: Array<MealPlanScalarWhereInput>;
}
