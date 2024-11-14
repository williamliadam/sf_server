import { RecipeCreateWithoutUsedDishTemplatesInput } from './recipe-create-without-used-dish-templates.input';
import { RecipeCreateOrConnectWithoutUsedDishTemplatesInput } from './recipe-create-or-connect-without-used-dish-templates.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
export declare class RecipeCreateNestedOneWithoutUsedDishTemplatesInput {
    create?: RecipeCreateWithoutUsedDishTemplatesInput;
    connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishTemplatesInput;
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
