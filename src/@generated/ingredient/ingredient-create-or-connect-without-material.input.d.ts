import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientCreateWithoutMaterialInput } from './ingredient-create-without-material.input';
export declare class IngredientCreateOrConnectWithoutMaterialInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    create: IngredientCreateWithoutMaterialInput;
}
