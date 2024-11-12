import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DishPlanCountAggregate } from './dish-plan-count-aggregate.output';
import { DishPlanAvgAggregate } from './dish-plan-avg-aggregate.output';
import { DishPlanSumAggregate } from './dish-plan-sum-aggregate.output';
import { DishPlanMinAggregate } from './dish-plan-min-aggregate.output';
import { DishPlanMaxAggregate } from './dish-plan-max-aggregate.output';

@ObjectType()
export class DishPlanGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    planCookerId!: number;

    @Field(() => Int, {nullable:true})
    mealPlanId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DishPlanCountAggregate, {nullable:true})
    _count?: DishPlanCountAggregate;

    @Field(() => DishPlanAvgAggregate, {nullable:true})
    _avg?: DishPlanAvgAggregate;

    @Field(() => DishPlanSumAggregate, {nullable:true})
    _sum?: DishPlanSumAggregate;

    @Field(() => DishPlanMinAggregate, {nullable:true})
    _min?: DishPlanMinAggregate;

    @Field(() => DishPlanMaxAggregate, {nullable:true})
    _max?: DishPlanMaxAggregate;
}
