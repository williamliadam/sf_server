import { NutritionRowCreateWithoutBelongMaterialInput } from './nutrition-row-create-without-belong-material.input';
import { NutritionRowCreateOrConnectWithoutBelongMaterialInput } from './nutrition-row-create-or-connect-without-belong-material.input';
import { NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput } from './nutrition-row-upsert-with-where-unique-without-belong-material.input';
import { NutritionRowCreateManyBelongMaterialInputEnvelope } from './nutrition-row-create-many-belong-material-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput } from './nutrition-row-update-with-where-unique-without-belong-material.input';
import { NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput } from './nutrition-row-update-many-with-where-without-belong-material.input';
import { NutritionRowScalarWhereInput } from './nutrition-row-scalar-where.input';
export declare class NutritionRowUpdateManyWithoutBelongMaterialNestedInput {
    create?: Array<NutritionRowCreateWithoutBelongMaterialInput>;
    connectOrCreate?: Array<NutritionRowCreateOrConnectWithoutBelongMaterialInput>;
    upsert?: Array<NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput>;
    createMany?: NutritionRowCreateManyBelongMaterialInputEnvelope;
    set?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
    update?: Array<NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput>;
    updateMany?: Array<NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput>;
    deleteMany?: Array<NutritionRowScalarWhereInput>;
}
