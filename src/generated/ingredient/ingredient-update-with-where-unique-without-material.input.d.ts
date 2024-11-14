import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithoutMaterialInput } from './ingredient-update-without-material.input';
export declare class IngredientUpdateWithWhereUniqueWithoutMaterialInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    data: IngredientUpdateWithoutMaterialInput;
}
