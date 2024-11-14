import { RecipeCreateWithoutMethodsInput } from './recipe-create-without-methods.input';
import { RecipeCreateOrConnectWithoutMethodsInput } from './recipe-create-or-connect-without-methods.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
export declare class RecipeCreateNestedOneWithoutMethodsInput {
    create?: RecipeCreateWithoutMethodsInput;
    connectOrCreate?: RecipeCreateOrConnectWithoutMethodsInput;
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
