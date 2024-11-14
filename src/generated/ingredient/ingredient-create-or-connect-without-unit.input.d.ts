import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientCreateWithoutUnitInput } from './ingredient-create-without-unit.input';
export declare class IngredientCreateOrConnectWithoutUnitInput {
    where: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    create: IngredientCreateWithoutUnitInput;
}
