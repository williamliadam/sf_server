import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientCreateInput } from './ingredient-create.input';
import { IngredientUpdateInput } from './ingredient-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneIngredientArgs {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    create: IngredientCreateInput;
    update: IngredientUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
