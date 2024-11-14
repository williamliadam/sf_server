import { NutritionRowCreateWithoutNutirtionInput } from './nutrition-row-create-without-nutirtion.input';
import { NutritionRowCreateOrConnectWithoutNutirtionInput } from './nutrition-row-create-or-connect-without-nutirtion.input';
import { NutritionRowCreateManyNutirtionInputEnvelope } from './nutrition-row-create-many-nutirtion-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
export declare class NutritionRowUncheckedCreateNestedManyWithoutNutirtionInput {
    create?: Array<NutritionRowCreateWithoutNutirtionInput>;
    connectOrCreate?: Array<NutritionRowCreateOrConnectWithoutNutirtionInput>;
    createMany?: NutritionRowCreateManyNutirtionInputEnvelope;
    connect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
}
