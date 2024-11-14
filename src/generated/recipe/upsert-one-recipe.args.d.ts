import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeCreateInput } from './recipe-create.input';
import { RecipeUpdateInput } from './recipe-update.input';
export declare class UpsertOneRecipeArgs {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    create: RecipeCreateInput;
    update: RecipeUpdateInput;
}
