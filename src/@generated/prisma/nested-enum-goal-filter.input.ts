import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Goal } from './goal.enum';

@InputType()
export class NestedEnumGoalFilter {

    @Field(() => Goal, {nullable:true})
    equals?: keyof typeof Goal;

    @Field(() => [Goal], {nullable:true})
    in?: Array<keyof typeof Goal>;

    @Field(() => [Goal], {nullable:true})
    notIn?: Array<keyof typeof Goal>;

    @Field(() => NestedEnumGoalFilter, {nullable:true})
    not?: NestedEnumGoalFilter;
}
