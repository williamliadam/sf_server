import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionRowWhereInput } from './nutrition-row-where.input';
import { Type } from 'class-transformer';
import { NutritionRowOrderByWithRelationInput } from './nutrition-row-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionRowScalarFieldEnum } from './nutrition-row-scalar-field.enum';

@ArgsType()
export class FindFirstNutritionRowOrThrowArgs {

    @Field(() => NutritionRowWhereInput, {nullable:true})
    @Type(() => NutritionRowWhereInput)
    where?: NutritionRowWhereInput;

    @Field(() => [NutritionRowOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutritionRowOrderByWithRelationInput>;

    @Field(() => NutritionRowWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NutritionRowScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NutritionRowScalarFieldEnum>;
}
