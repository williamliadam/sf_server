import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionWhereInput } from './nutrition-where.input';
import { Type } from 'class-transformer';
import { NutritionOrderByWithRelationInput } from './nutrition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionScalarFieldEnum } from './nutrition-scalar-field.enum';

@ArgsType()
export class FindFirstNutritionArgs {

    @Field(() => NutritionWhereInput, {nullable:true})
    @Type(() => NutritionWhereInput)
    where?: NutritionWhereInput;

    @Field(() => [NutritionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutritionOrderByWithRelationInput>;

    @Field(() => NutritionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NutritionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NutritionScalarFieldEnum>;
}
