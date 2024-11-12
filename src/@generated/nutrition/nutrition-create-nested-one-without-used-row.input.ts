import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionCreateWithoutUsedRowInput } from './nutrition-create-without-used-row.input';
import { Type } from 'class-transformer';
import { NutritionCreateOrConnectWithoutUsedRowInput } from './nutrition-create-or-connect-without-used-row.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';

@InputType()
export class NutritionCreateNestedOneWithoutUsedRowInput {

    @Field(() => NutritionCreateWithoutUsedRowInput, {nullable:true})
    @Type(() => NutritionCreateWithoutUsedRowInput)
    create?: NutritionCreateWithoutUsedRowInput;

    @Field(() => NutritionCreateOrConnectWithoutUsedRowInput, {nullable:true})
    @Type(() => NutritionCreateOrConnectWithoutUsedRowInput)
    connectOrCreate?: NutritionCreateOrConnectWithoutUsedRowInput;

    @Field(() => NutritionWhereUniqueInput, {nullable:true})
    @Type(() => NutritionWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
}
