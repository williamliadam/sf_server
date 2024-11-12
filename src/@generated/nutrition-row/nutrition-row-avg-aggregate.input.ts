import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionRowAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    nutirtionId?: true;

    @Field(() => Boolean, {nullable:true})
    percent?: true;

    @Field(() => Boolean, {nullable:true})
    belongToId?: true;
}
