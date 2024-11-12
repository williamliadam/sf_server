import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NutritionRowCountAggregate } from './nutrition-row-count-aggregate.output';
import { NutritionRowAvgAggregate } from './nutrition-row-avg-aggregate.output';
import { NutritionRowSumAggregate } from './nutrition-row-sum-aggregate.output';
import { NutritionRowMinAggregate } from './nutrition-row-min-aggregate.output';
import { NutritionRowMaxAggregate } from './nutrition-row-max-aggregate.output';

@ObjectType()
export class AggregateNutritionRow {

    @Field(() => NutritionRowCountAggregate, {nullable:true})
    _count?: NutritionRowCountAggregate;

    @Field(() => NutritionRowAvgAggregate, {nullable:true})
    _avg?: NutritionRowAvgAggregate;

    @Field(() => NutritionRowSumAggregate, {nullable:true})
    _sum?: NutritionRowSumAggregate;

    @Field(() => NutritionRowMinAggregate, {nullable:true})
    _min?: NutritionRowMinAggregate;

    @Field(() => NutritionRowMaxAggregate, {nullable:true})
    _max?: NutritionRowMaxAggregate;
}
