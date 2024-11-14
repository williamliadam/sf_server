import { IngredientCreateWithoutUnitInput } from './ingredient-create-without-unit.input';
import { IngredientCreateOrConnectWithoutUnitInput } from './ingredient-create-or-connect-without-unit.input';
import { IngredientCreateManyUnitInputEnvelope } from './ingredient-create-many-unit-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
export declare class IngredientUncheckedCreateNestedManyWithoutUnitInput {
    create?: Array<IngredientCreateWithoutUnitInput>;
    connectOrCreate?: Array<IngredientCreateOrConnectWithoutUnitInput>;
    createMany?: IngredientCreateManyUnitInputEnvelope;
    connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
}
