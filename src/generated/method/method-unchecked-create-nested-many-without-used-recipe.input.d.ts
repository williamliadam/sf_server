import { MethodCreateWithoutUsedRecipeInput } from './method-create-without-used-recipe.input';
import { MethodCreateOrConnectWithoutUsedRecipeInput } from './method-create-or-connect-without-used-recipe.input';
import { MethodCreateManyUsedRecipeInputEnvelope } from './method-create-many-used-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
export declare class MethodUncheckedCreateNestedManyWithoutUsedRecipeInput {
    create?: Array<MethodCreateWithoutUsedRecipeInput>;
    connectOrCreate?: Array<MethodCreateOrConnectWithoutUsedRecipeInput>;
    createMany?: MethodCreateManyUsedRecipeInputEnvelope;
    connect?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;
}
