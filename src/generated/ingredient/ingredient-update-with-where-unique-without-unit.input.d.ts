import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithoutUnitInput } from './ingredient-update-without-unit.input';
export declare class IngredientUpdateWithWhereUniqueWithoutUnitInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    data: IngredientUpdateWithoutUnitInput;
}
