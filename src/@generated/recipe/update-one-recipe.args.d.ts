import { RecipeUpdateInput } from './recipe-update.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneRecipeArgs {
    data: RecipeUpdateInput;
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
