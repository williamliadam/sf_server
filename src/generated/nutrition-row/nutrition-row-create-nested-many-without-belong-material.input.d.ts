import { NutritionRowCreateWithoutBelongMaterialInput } from './nutrition-row-create-without-belong-material.input';
import { NutritionRowCreateOrConnectWithoutBelongMaterialInput } from './nutrition-row-create-or-connect-without-belong-material.input';
import { NutritionRowCreateManyBelongMaterialInputEnvelope } from './nutrition-row-create-many-belong-material-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
export declare class NutritionRowCreateNestedManyWithoutBelongMaterialInput {
    create?: Array<NutritionRowCreateWithoutBelongMaterialInput>;
    connectOrCreate?: Array<NutritionRowCreateOrConnectWithoutBelongMaterialInput>;
    createMany?: NutritionRowCreateManyBelongMaterialInputEnvelope;
    connect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
}
