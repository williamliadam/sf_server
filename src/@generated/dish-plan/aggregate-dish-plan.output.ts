import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DishPlanCountAggregate } from './dish-plan-count-aggregate.output';
import { DishPlanAvgAggregate } from './dish-plan-avg-aggregate.output';
import { DishPlanSumAggregate } from './dish-plan-sum-aggregate.output';
import { DishPlanMinAggregate } from './dish-plan-min-aggregate.output';
import { DishPlanMaxAggregate } from './dish-plan-max-aggregate.output';

@ObjectType()
export class AggregateDishPlan {

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
