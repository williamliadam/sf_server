import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NutritionRowAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    nutirtionId?: number;

    @Field(() => Float, {nullable:true})
    percent?: number;

    @Field(() => Float, {nullable:true})
    belongToId?: number;
}
