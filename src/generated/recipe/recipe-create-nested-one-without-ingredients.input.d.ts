import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';
import { RecipeCreateOrConnectWithoutIngredientsInput } from './recipe-create-or-connect-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
export declare class RecipeCreateNestedOneWithoutIngredientsInput {
    create?: RecipeCreateWithoutIngredientsInput;
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput;
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
