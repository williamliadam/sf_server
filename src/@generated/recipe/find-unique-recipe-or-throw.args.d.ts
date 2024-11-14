import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
export declare class FindUniqueRecipeOrThrowArgs {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
