import { IngredientCreateWithoutMaterialInput } from './ingredient-create-without-material.input';
import { IngredientCreateOrConnectWithoutMaterialInput } from './ingredient-create-or-connect-without-material.input';
import { IngredientCreateManyMaterialInputEnvelope } from './ingredient-create-many-material-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
export declare class IngredientCreateNestedManyWithoutMaterialInput {
    create?: Array<IngredientCreateWithoutMaterialInput>;
    connectOrCreate?: Array<IngredientCreateOrConnectWithoutMaterialInput>;
    createMany?: IngredientCreateManyMaterialInputEnvelope;
    connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
}
