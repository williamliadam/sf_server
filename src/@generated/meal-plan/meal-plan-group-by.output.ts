import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';
import { MealPlanCountAggregate } from './meal-plan-count-aggregate.output';
import { MealPlanAvgAggregate } from './meal-plan-avg-aggregate.output';
import { MealPlanSumAggregate } from './meal-plan-sum-aggregate.output';
import { MealPlanMinAggregate } from './meal-plan-min-aggregate.output';
import { MealPlanMaxAggregate } from './meal-plan-max-aggregate.output';

@ObjectType()
export class MealPlanGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:true})
    planTime?: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => MealType, {nullable:false})
    type!: keyof typeof MealType;

    @Field(() => MealPlanCountAggregate, {nullable:true})
    _count?: MealPlanCountAggregate;

    @Field(() => MealPlanAvgAggregate, {nullable:true})
    _avg?: MealPlanAvgAggregate;

    @Field(() => MealPlanSumAggregate, {nullable:true})
    _sum?: MealPlanSumAggregate;

    @Field(() => MealPlanMinAggregate, {nullable:true})
    _min?: MealPlanMinAggregate;

    @Field(() => MealPlanMaxAggregate, {nullable:true})
    _max?: MealPlanMaxAggregate;
}
