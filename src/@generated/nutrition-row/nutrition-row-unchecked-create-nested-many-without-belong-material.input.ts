import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowCreateWithoutBelongMaterialInput } from './nutrition-row-create-without-belong-material.input';
import { Type } from 'class-transformer';
import { NutritionRowCreateOrConnectWithoutBelongMaterialInput } from './nutrition-row-create-or-connect-without-belong-material.input';
import { NutritionRowCreateManyBelongMaterialInputEnvelope } from './nutrition-row-create-many-belong-material-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';

@InputType()
export class NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput {

    @Field(() => [NutritionRowCreateWithoutBelongMaterialInput], {nullable:true})
    @Type(() => NutritionRowCreateWithoutBelongMaterialInput)
    create?: Array<NutritionRowCreateWithoutBelongMaterialInput>;

    @Field(() => [NutritionRowCreateOrConnectWithoutBelongMaterialInput], {nullable:true})
    @Type(() => NutritionRowCreateOrConnectWithoutBelongMaterialInput)
    connectOrCreate?: Array<NutritionRowCreateOrConnectWithoutBelongMaterialInput>;

    @Field(() => NutritionRowCreateManyBelongMaterialInputEnvelope, {nullable:true})
    @Type(() => NutritionRowCreateManyBelongMaterialInputEnvelope)
    createMany?: NutritionRowCreateManyBelongMaterialInputEnvelope;

    @Field(() => [NutritionRowWhereUniqueInput], {nullable:true})
    @Type(() => NutritionRowWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
}
