import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
export declare class FindUniqueRecipeArgs {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
