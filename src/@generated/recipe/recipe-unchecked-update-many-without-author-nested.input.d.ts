import { RecipeCreateWithoutAuthorInput } from './recipe-create-without-author.input';
import { RecipeCreateOrConnectWithoutAuthorInput } from './recipe-create-or-connect-without-author.input';
import { RecipeUpsertWithWhereUniqueWithoutAuthorInput } from './recipe-upsert-with-where-unique-without-author.input';
import { RecipeCreateManyAuthorInputEnvelope } from './recipe-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutAuthorInput } from './recipe-update-with-where-unique-without-author.input';
import { RecipeUpdateManyWithWhereWithoutAuthorInput } from './recipe-update-many-with-where-without-author.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';
export declare class RecipeUncheckedUpdateManyWithoutAuthorNestedInput {
    create?: Array<RecipeCreateWithoutAuthorInput>;
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAuthorInput>;
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: RecipeCreateManyAuthorInputEnvelope;
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    update?: Array<RecipeUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Array<RecipeScalarWhereInput>;
}
