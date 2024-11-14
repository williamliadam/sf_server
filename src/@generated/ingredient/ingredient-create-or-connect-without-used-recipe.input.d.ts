import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientCreateWithoutUsedRecipeInput } from './ingredient-create-without-used-recipe.input';
export declare class IngredientCreateOrConnectWithoutUsedRecipeInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    create: IngredientCreateWithoutUsedRecipeInput;
}
