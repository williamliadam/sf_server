import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealTemplateCountAggregate } from './meal-template-count-aggregate.output';
import { MealTemplateAvgAggregate } from './meal-template-avg-aggregate.output';
import { MealTemplateSumAggregate } from './meal-template-sum-aggregate.output';
import { MealTemplateMinAggregate } from './meal-template-min-aggregate.output';
import { MealTemplateMaxAggregate } from './meal-template-max-aggregate.output';

@ObjectType()
export class MealTemplateGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => MealTemplateCountAggregate, {nullable:true})
    _count?: MealTemplateCountAggregate;

    @Field(() => MealTemplateAvgAggregate, {nullable:true})
    _avg?: MealTemplateAvgAggregate;

    @Field(() => MealTemplateSumAggregate, {nullable:true})
    _sum?: MealTemplateSumAggregate;

    @Field(() => MealTemplateMinAggregate, {nullable:true})
    _min?: MealTemplateMinAggregate;

    @Field(() => MealTemplateMaxAggregate, {nullable:true})
    _max?: MealTemplateMaxAggregate;
}
