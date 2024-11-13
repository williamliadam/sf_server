import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MethodCountAggregate } from './method-count-aggregate.output';
import { MethodAvgAggregate } from './method-avg-aggregate.output';
import { MethodSumAggregate } from './method-sum-aggregate.output';
import { MethodMinAggregate } from './method-min-aggregate.output';
import { MethodMaxAggregate } from './method-max-aggregate.output';

@ObjectType()
export class MethodGroupBy {
	@Field(() => Int, { nullable: false })
	id!: number;

	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => String, { nullable: false })
	desc!: string;

	@Field(() => Int, { nullable: true })
	recipeId?: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date | string;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date | string;

	@Field(() => MethodCountAggregate, { nullable: true })
	_count?: MethodCountAggregate;

	@Field(() => MethodAvgAggregate, { nullable: true })
	_avg?: MethodAvgAggregate;

	@Field(() => MethodSumAggregate, { nullable: true })
	_sum?: MethodSumAggregate;

	@Field(() => MethodMinAggregate, { nullable: true })
	_min?: MethodMinAggregate;

	@Field(() => MethodMaxAggregate, { nullable: true })
	_max?: MethodMaxAggregate;
}
