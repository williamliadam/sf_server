import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithoutUsedRecipeInput } from './ingredient-update-without-used-recipe.input';
import { IngredientCreateWithoutUsedRecipeInput } from './ingredient-create-without-used-recipe.input';
export declare class IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    update: IngredientUpdateWithoutUsedRecipeInput;
    create: IngredientCreateWithoutUsedRecipeInput;
}
