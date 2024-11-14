import { RecipeCreateWithoutMethodsInput } from './recipe-create-without-methods.input';
import { RecipeCreateOrConnectWithoutMethodsInput } from './recipe-create-or-connect-without-methods.input';
import { RecipeUpsertWithoutMethodsInput } from './recipe-upsert-without-methods.input';
import { RecipeWhereInput } from './recipe-where.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutMethodsInput } from './recipe-update-to-one-with-where-without-methods.input';
export declare class RecipeUpdateOneWithoutMethodsNestedInput {
    create?: RecipeCreateWithoutMethodsInput;
    connectOrCreate?: RecipeCreateOrConnectWithoutMethodsInput;
    upsert?: RecipeUpsertWithoutMethodsInput;
    disconnect?: RecipeWhereInput;
    delete?: RecipeWhereInput;
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    update?: RecipeUpdateToOneWithWhereWithoutMethodsInput;
}
