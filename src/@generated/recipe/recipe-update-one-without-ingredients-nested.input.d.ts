import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';
import { RecipeCreateOrConnectWithoutIngredientsInput } from './recipe-create-or-connect-without-ingredients.input';
import { RecipeUpsertWithoutIngredientsInput } from './recipe-upsert-without-ingredients.input';
import { RecipeWhereInput } from './recipe-where.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutIngredientsInput } from './recipe-update-to-one-with-where-without-ingredients.input';
export declare class RecipeUpdateOneWithoutIngredientsNestedInput {
    create?: RecipeCreateWithoutIngredientsInput;
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput;
    upsert?: RecipeUpsertWithoutIngredientsInput;
    disconnect?: RecipeWhereInput;
    delete?: RecipeWhereInput;
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    update?: RecipeUpdateToOneWithWhereWithoutIngredientsInput;
}
