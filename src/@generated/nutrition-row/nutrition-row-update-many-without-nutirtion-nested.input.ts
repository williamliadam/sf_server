import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowCreateWithoutNutirtionInput } from './nutrition-row-create-without-nutirtion.input';
import { Type } from 'class-transformer';
import { NutritionRowCreateOrConnectWithoutNutirtionInput } from './nutrition-row-create-or-connect-without-nutirtion.input';
import { NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput } from './nutrition-row-upsert-with-where-unique-without-nutirtion.input';
import { NutritionRowCreateManyNutirtionInputEnvelope } from './nutrition-row-create-many-nutirtion-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput } from './nutrition-row-update-with-where-unique-without-nutirtion.input';
import { NutritionRowUpdateManyWithWhereWithoutNutirtionInput } from './nutrition-row-update-many-with-where-without-nutirtion.input';
import { NutritionRowScalarWhereInput } from './nutrition-row-scalar-where.input';

@InputType()
export class NutritionRowUpdateManyWithoutNutirtionNestedInput {

    @Field(() => [NutritionRowCreateWithoutNutirtionInput], {nullable:true})
    @Type(() => NutritionRowCreateWithoutNutirtionInput)
    create?: Array<NutritionRowCreateWithoutNutirtionInput>;

    @Field(() => [NutritionRowCreateOrConnectWithoutNutirtionInput], {nullable:true})
    @Type(() => NutritionRowCreateOrConnectWithoutNutirtionInput)
    connectOrCreate?: Array<NutritionRowCreateOrConnectWithoutNutirtionInput>;

    @Field(() => [NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput], {nullable:true})
    @Type(() => NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput)
    upsert?: Array<NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput>;

    @Field(() => NutritionRowCreateManyNutirtionInputEnvelope, {nullable:true})
    @Type(() => NutritionRowCreateManyNutirtionInputEnvelope)
    createMany?: NutritionRowCreateManyNutirtionInputEnvelope;

    @Field(() => [NutritionRowWhereUniqueInput], {nullable:true})
    @Type(() => NutritionRowWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;

    @Field(() => [NutritionRowWhereUniqueInput], {nullable:true})
    @Type(() => NutritionRowWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;

    @Field(() => [NutritionRowWhereUniqueInput], {nullable:true})
    @Type(() => NutritionRowWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;

    @Field(() => [NutritionRowWhereUniqueInput], {nullable:true})
    @Type(() => NutritionRowWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;

    @Field(() => [NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput], {nullable:true})
    @Type(() => NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput)
    update?: Array<NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput>;

    @Field(() => [NutritionRowUpdateManyWithWhereWithoutNutirtionInput], {nullable:true})
    @Type(() => NutritionRowUpdateManyWithWhereWithoutNutirtionInput)
    updateMany?: Array<NutritionRowUpdateManyWithWhereWithoutNutirtionInput>;

    @Field(() => [NutritionRowScalarWhereInput], {nullable:true})
    @Type(() => NutritionRowScalarWhereInput)
    deleteMany?: Array<NutritionRowScalarWhereInput>;
}
