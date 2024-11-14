import { DishPlanCreateWithoutRecipeInput } from './dish-plan-create-without-recipe.input';
import { DishPlanCreateOrConnectWithoutRecipeInput } from './dish-plan-create-or-connect-without-recipe.input';
import { DishPlanUpsertWithWhereUniqueWithoutRecipeInput } from './dish-plan-upsert-with-where-unique-without-recipe.input';
import { DishPlanCreateManyRecipeInputEnvelope } from './dish-plan-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithWhereUniqueWithoutRecipeInput } from './dish-plan-update-with-where-unique-without-recipe.input';
import { DishPlanUpdateManyWithWhereWithoutRecipeInput } from './dish-plan-update-many-with-where-without-recipe.input';
import { DishPlanScalarWhereInput } from './dish-plan-scalar-where.input';
export declare class DishPlanUncheckedUpdateManyWithoutRecipeNestedInput {
    create?: Array<DishPlanCreateWithoutRecipeInput>;
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutRecipeInput>;
    upsert?: Array<DishPlanUpsertWithWhereUniqueWithoutRecipeInput>;
    createMany?: DishPlanCreateManyRecipeInputEnvelope;
    set?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
    update?: Array<DishPlanUpdateWithWhereUniqueWithoutRecipeInput>;
    updateMany?: Array<DishPlanUpdateManyWithWhereWithoutRecipeInput>;
    deleteMany?: Array<DishPlanScalarWhereInput>;
}
