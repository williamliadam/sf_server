import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeCreateInput } from './recipe-create.input';
import { RecipeUpdateInput } from './recipe-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneRecipeArgs {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    create: RecipeCreateInput;
    update: RecipeUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
