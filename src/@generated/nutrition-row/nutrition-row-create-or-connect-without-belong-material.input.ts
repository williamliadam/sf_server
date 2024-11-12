import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionRowCreateWithoutBelongMaterialInput } from './nutrition-row-create-without-belong-material.input';

@InputType()
export class NutritionRowCreateOrConnectWithoutBelongMaterialInput {

    @Field(() => NutritionRowWhereUniqueInput, {nullable:false})
    @Type(() => NutritionRowWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;

    @Field(() => NutritionRowCreateWithoutBelongMaterialInput, {nullable:false})
    @Type(() => NutritionRowCreateWithoutBelongMaterialInput)
    create!: NutritionRowCreateWithoutBelongMaterialInput;
}
