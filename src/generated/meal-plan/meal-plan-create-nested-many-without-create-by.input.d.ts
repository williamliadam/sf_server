import { MealPlanCreateWithoutCreateByInput } from './meal-plan-create-without-create-by.input';
import { MealPlanCreateOrConnectWithoutCreateByInput } from './meal-plan-create-or-connect-without-create-by.input';
import { MealPlanCreateManyCreateByInputEnvelope } from './meal-plan-create-many-create-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
export declare class MealPlanCreateNestedManyWithoutCreateByInput {
    create?: Array<MealPlanCreateWithoutCreateByInput>;
    connectOrCreate?: Array<MealPlanCreateOrConnectWithoutCreateByInput>;
    createMany?: MealPlanCreateManyCreateByInputEnvelope;
    connect?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;
}
