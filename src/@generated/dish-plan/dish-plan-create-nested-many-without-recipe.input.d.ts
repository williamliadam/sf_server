import { DishPlanCreateWithoutRecipeInput } from './dish-plan-create-without-recipe.input';
import { DishPlanCreateOrConnectWithoutRecipeInput } from './dish-plan-create-or-connect-without-recipe.input';
import { DishPlanCreateManyRecipeInputEnvelope } from './dish-plan-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
export declare class DishPlanCreateNestedManyWithoutRecipeInput {
    create?: Array<DishPlanCreateWithoutRecipeInput>;
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutRecipeInput>;
    createMany?: DishPlanCreateManyRecipeInputEnvelope;
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
}
