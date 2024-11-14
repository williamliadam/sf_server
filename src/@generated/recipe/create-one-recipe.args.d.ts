import { RecipeCreateInput } from './recipe-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneRecipeArgs {
    data: RecipeCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
