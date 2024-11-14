import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithoutMaterialInput } from './ingredient-update-without-material.input';
import { IngredientCreateWithoutMaterialInput } from './ingredient-create-without-material.input';
export declare class IngredientUpsertWithWhereUniqueWithoutMaterialInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    update: IngredientUpdateWithoutMaterialInput;
    create: IngredientCreateWithoutMaterialInput;
}
