import { IngredientCreateWithoutMaterialInput } from './ingredient-create-without-material.input';
import { IngredientCreateOrConnectWithoutMaterialInput } from './ingredient-create-or-connect-without-material.input';
import { IngredientUpsertWithWhereUniqueWithoutMaterialInput } from './ingredient-upsert-with-where-unique-without-material.input';
import { IngredientCreateManyMaterialInputEnvelope } from './ingredient-create-many-material-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithWhereUniqueWithoutMaterialInput } from './ingredient-update-with-where-unique-without-material.input';
import { IngredientUpdateManyWithWhereWithoutMaterialInput } from './ingredient-update-many-with-where-without-material.input';
import { IngredientScalarWhereInput } from './ingredient-scalar-where.input';
export declare class IngredientUpdateManyWithoutMaterialNestedInput {
    create?: Array<IngredientCreateWithoutMaterialInput>;
    connectOrCreate?: Array<IngredientCreateOrConnectWithoutMaterialInput>;
    upsert?: Array<IngredientUpsertWithWhereUniqueWithoutMaterialInput>;
    createMany?: IngredientCreateManyMaterialInputEnvelope;
    set?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
    update?: Array<IngredientUpdateWithWhereUniqueWithoutMaterialInput>;
    updateMany?: Array<IngredientUpdateManyWithWhereWithoutMaterialInput>;
    deleteMany?: Array<IngredientScalarWhereInput>;
}
