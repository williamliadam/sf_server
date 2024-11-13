import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MethodCountAggregate } from './method-count-aggregate.output';
import { MethodAvgAggregate } from './method-avg-aggregate.output';
import { MethodSumAggregate } from './method-sum-aggregate.output';
import { MethodMinAggregate } from './method-min-aggregate.output';
import { MethodMaxAggregate } from './method-max-aggregate.output';

@ObjectType()
export class AggregateMethod {
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
