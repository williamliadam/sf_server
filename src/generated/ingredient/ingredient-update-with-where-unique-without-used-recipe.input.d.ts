import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithoutUsedRecipeInput } from './ingredient-update-without-used-recipe.input';
export declare class IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    data: IngredientUpdateWithoutUsedRecipeInput;
}
