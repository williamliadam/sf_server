import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionCreateWithoutUsedRowInput } from './nutrition-create-without-used-row.input';
import { Type } from 'class-transformer';
import { NutritionCreateOrConnectWithoutUsedRowInput } from './nutrition-create-or-connect-without-used-row.input';
import { NutritionUpsertWithoutUsedRowInput } from './nutrition-upsert-without-used-row.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { NutritionUpdateToOneWithWhereWithoutUsedRowInput } from './nutrition-update-to-one-with-where-without-used-row.input';

@InputType()
export class NutritionUpdateOneRequiredWithoutUsedRowNestedInput {

    @Field(() => NutritionCreateWithoutUsedRowInput, {nullable:true})
    @Type(() => NutritionCreateWithoutUsedRowInput)
    create?: NutritionCreateWithoutUsedRowInput;

    @Field(() => NutritionCreateOrConnectWithoutUsedRowInput, {nullable:true})
    @Type(() => NutritionCreateOrConnectWithoutUsedRowInput)
    connectOrCreate?: NutritionCreateOrConnectWithoutUsedRowInput;

    @Field(() => NutritionUpsertWithoutUsedRowInput, {nullable:true})
    @Type(() => NutritionUpsertWithoutUsedRowInput)
    upsert?: NutritionUpsertWithoutUsedRowInput;

    @Field(() => NutritionWhereUniqueInput, {nullable:true})
    @Type(() => NutritionWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;

    @Field(() => NutritionUpdateToOneWithWhereWithoutUsedRowInput, {nullable:true})
    @Type(() => NutritionUpdateToOneWithWhereWithoutUsedRowInput)
    update?: NutritionUpdateToOneWithWhereWithoutUsedRowInput;
}
