import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Goal } from './goal.enum';
import { NestedEnumGoalWithAggregatesFilter } from './nested-enum-goal-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGoalFilter } from './nested-enum-goal-filter.input';

@InputType()
export class EnumGoalWithAggregatesFilter {

    @Field(() => Goal, {nullable:true})
    equals?: keyof typeof Goal;

    @Field(() => [Goal], {nullable:true})
    in?: Array<keyof typeof Goal>;

    @Field(() => [Goal], {nullable:true})
    notIn?: Array<keyof typeof Goal>;

    @Field(() => NestedEnumGoalWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGoalWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGoalFilter, {nullable:true})
    _min?: NestedEnumGoalFilter;

    @Field(() => NestedEnumGoalFilter, {nullable:true})
    _max?: NestedEnumGoalFilter;
}
