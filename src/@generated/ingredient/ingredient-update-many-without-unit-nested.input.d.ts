import { IngredientCreateWithoutUnitInput } from './ingredient-create-without-unit.input';
import { IngredientCreateOrConnectWithoutUnitInput } from './ingredient-create-or-connect-without-unit.input';
import { IngredientUpsertWithWhereUniqueWithoutUnitInput } from './ingredient-upsert-with-where-unique-without-unit.input';
import { IngredientCreateManyUnitInputEnvelope } from './ingredient-create-many-unit-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithWhereUniqueWithoutUnitInput } from './ingredient-update-with-where-unique-without-unit.input';
import { IngredientUpdateManyWithWhereWithoutUnitInput } from './ingredient-update-many-with-where-without-unit.input';
import { IngredientScalarWhereInput } from './ingredient-scalar-where.input';
export declare class IngredientUpdateManyWithoutUnitNestedInput {
    create?: Array<IngredientCreateWithoutUnitInput>;
    connectOrCreate?: Array<IngredientCreateOrConnectWithoutUnitInput>;
    upsert?: Array<IngredientUpsertWithWhereUniqueWithoutUnitInput>;
    createMany?: IngredientCreateManyUnitInputEnvelope;
    set?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    update?: Array<IngredientUpdateWithWhereUniqueWithoutUnitInput>;
    updateMany?: Array<IngredientUpdateManyWithWhereWithoutUnitInput>;
    deleteMany?: Array<IngredientScalarWhereInput>;
}
