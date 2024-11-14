import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
export declare class FindUniqueIngredientArgs {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
