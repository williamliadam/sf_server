import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutritionRowSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    nutirtionId?: number;

    @Field(() => Int, {nullable:true})
    percent?: number;

    @Field(() => Int, {nullable:true})
    belongToId?: number;
}
