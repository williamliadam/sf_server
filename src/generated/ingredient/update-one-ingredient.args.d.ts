import { IngredientUpdateInput } from './ingredient-update.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
export declare class UpdateOneIngredientArgs {
    data: IngredientUpdateInput;
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
