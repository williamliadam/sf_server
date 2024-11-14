import { RecipeCreateWithoutAuthorInput } from './recipe-create-without-author.input';
import { RecipeCreateOrConnectWithoutAuthorInput } from './recipe-create-or-connect-without-author.input';
import { RecipeCreateManyAuthorInputEnvelope } from './recipe-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
export declare class RecipeCreateNestedManyWithoutAuthorInput {
    create?: Array<RecipeCreateWithoutAuthorInput>;
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAuthorInput>;
    createMany?: RecipeCreateManyAuthorInputEnvelope;
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}
