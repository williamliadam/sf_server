import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MealPlanCount {

    @Field(() => Int, {nullable:false})
    dishPlans?: number;
}
