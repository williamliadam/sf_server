import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithoutUnitInput } from './ingredient-update-without-unit.input';
import { IngredientCreateWithoutUnitInput } from './ingredient-create-without-unit.input';
export declare class IngredientUpsertWithWhereUniqueWithoutUnitInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    update: IngredientUpdateWithoutUnitInput;
    create: IngredientCreateWithoutUnitInput;
}
