import { IngredientCreateWithoutUsedRecipeInput } from './ingredient-create-without-used-recipe.input';
import { IngredientCreateOrConnectWithoutUsedRecipeInput } from './ingredient-create-or-connect-without-used-recipe.input';
import { IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput } from './ingredient-upsert-with-where-unique-without-used-recipe.input';
import { IngredientCreateManyUsedRecipeInputEnvelope } from './ingredient-create-many-used-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput } from './ingredient-update-with-where-unique-without-used-recipe.input';
import { IngredientUpdateManyWithWhereWithoutUsedRecipeInput } from './ingredient-update-many-with-where-without-used-recipe.input';
import { IngredientScalarWhereInput } from './ingredient-scalar-where.input';
export declare class IngredientUpdateManyWithoutUsedRecipeNestedInput {
    create?: Array<IngredientCreateWithoutUsedRecipeInput>;
    connectOrCreate?: Array<IngredientCreateOrConnectWithoutUsedRecipeInput>;
    upsert?: Array<IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput>;
    createMany?: IngredientCreateManyUsedRecipeInputEnvelope;
    set?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    update?: Array<IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput>;
    updateMany?: Array<IngredientUpdateManyWithWhereWithoutUsedRecipeInput>;
    deleteMany?: Array<IngredientScalarWhereInput>;
}
