import { MethodCreateWithoutUsedRecipeInput } from './method-create-without-used-recipe.input';
import { MethodCreateOrConnectWithoutUsedRecipeInput } from './method-create-or-connect-without-used-recipe.input';
import { MethodUpsertWithWhereUniqueWithoutUsedRecipeInput } from './method-upsert-with-where-unique-without-used-recipe.input';
import { MethodCreateManyUsedRecipeInputEnvelope } from './method-create-many-used-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { MethodUpdateWithWhereUniqueWithoutUsedRecipeInput } from './method-update-with-where-unique-without-used-recipe.input';
import { MethodUpdateManyWithWhereWithoutUsedRecipeInput } from './method-update-many-with-where-without-used-recipe.input';
import { MethodScalarWhereInput } from './method-scalar-where.input';
export declare class MethodUncheckedUpdateManyWithoutUsedRecipeNestedInput {
    create?: Array<MethodCreateWithoutUsedRecipeInput>;
    connectOrCreate?: Array<MethodCreateOrConnectWithoutUsedRecipeInput>;
    upsert?: Array<MethodUpsertWithWhereUniqueWithoutUsedRecipeInput>;
    createMany?: MethodCreateManyUsedRecipeInputEnvelope;
    set?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;
    disconnect?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;
    delete?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;
    connect?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;
    update?: Array<MethodUpdateWithWhereUniqueWithoutUsedRecipeInput>;
    updateMany?: Array<MethodUpdateManyWithWhereWithoutUsedRecipeInput>;
    deleteMany?: Array<MethodScalarWhereInput>;
}
