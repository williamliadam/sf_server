import { NutritionRowCreateWithoutNutirtionInput } from './nutrition-row-create-without-nutirtion.input';
import { NutritionRowCreateOrConnectWithoutNutirtionInput } from './nutrition-row-create-or-connect-without-nutirtion.input';
import { NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput } from './nutrition-row-upsert-with-where-unique-without-nutirtion.input';
import { NutritionRowCreateManyNutirtionInputEnvelope } from './nutrition-row-create-many-nutirtion-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput } from './nutrition-row-update-with-where-unique-without-nutirtion.input';
import { NutritionRowUpdateManyWithWhereWithoutNutirtionInput } from './nutrition-row-update-many-with-where-without-nutirtion.input';
import { NutritionRowScalarWhereInput } from './nutrition-row-scalar-where.input';
export declare class NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput {
    create?: Array<NutritionRowCreateWithoutNutirtionInput>;
    connectOrCreate?: Array<NutritionRowCreateOrConnectWithoutNutirtionInput>;
    upsert?: Array<NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput>;
    createMany?: NutritionRowCreateManyNutirtionInputEnvelope;
    set?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
    update?: Array<NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput>;
    updateMany?: Array<NutritionRowUpdateManyWithWhereWithoutNutirtionInput>;
    deleteMany?: Array<NutritionRowScalarWhereInput>;
}
