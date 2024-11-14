import { IngredientUpdateInput } from './ingredient-update.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneIngredientArgs {
    data: IngredientUpdateInput;
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
