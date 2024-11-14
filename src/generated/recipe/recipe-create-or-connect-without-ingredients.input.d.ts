import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';
export declare class RecipeCreateOrConnectWithoutIngredientsInput {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    create: RecipeCreateWithoutIngredientsInput;
}
