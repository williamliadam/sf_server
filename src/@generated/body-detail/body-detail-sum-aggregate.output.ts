import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BodyDetailSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    weight?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => Int, {nullable:true})
    bmi?: number;

    @Field(() => Int, {nullable:true})
    bmr?: number;

    @Field(() => Int, {nullable:true})
    tdee?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
