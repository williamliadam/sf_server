import { IngredientCreateInput } from './ingredient-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneIngredientArgs {
    data: IngredientCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
