import { IngredientCreateWithoutUsedRecipeInput } from './ingredient-create-without-used-recipe.input';
import { IngredientCreateOrConnectWithoutUsedRecipeInput } from './ingredient-create-or-connect-without-used-recipe.input';
import { IngredientCreateManyUsedRecipeInputEnvelope } from './ingredient-create-many-used-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
export declare class IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput {
    create?: Array<IngredientCreateWithoutUsedRecipeInput>;
    connectOrCreate?: Array<IngredientCreateOrConnectWithoutUsedRecipeInput>;
    createMany?: IngredientCreateManyUsedRecipeInputEnvelope;
    connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
}
