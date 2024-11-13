import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Goal } from './goal.enum';
import { NestedEnumGoalFilter } from './nested-enum-goal-filter.input';

@InputType()
export class EnumGoalFilter {
	@Field(() => Goal, { nullable: true })
	equals?: keyof typeof Goal;

	@Field(() => [Goal], { nullable: true })
	in?: Array<keyof typeof Goal>;

	@Field(() => [Goal], { nullable: true })
	notIn?: Array<keyof typeof Goal>;

	@Field(() => NestedEnumGoalFilter, { nullable: true })
	not?: NestedEnumGoalFilter;
}
