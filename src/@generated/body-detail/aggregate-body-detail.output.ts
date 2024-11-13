import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BodyDetailCountAggregate } from './body-detail-count-aggregate.output';
import { BodyDetailAvgAggregate } from './body-detail-avg-aggregate.output';
import { BodyDetailSumAggregate } from './body-detail-sum-aggregate.output';
import { BodyDetailMinAggregate } from './body-detail-min-aggregate.output';
import { BodyDetailMaxAggregate } from './body-detail-max-aggregate.output';

@ObjectType()
export class AggregateBodyDetail {
	@Field(() => BodyDetailCountAggregate, { nullable: true })
	_count?: BodyDetailCountAggregate;

	@Field(() => BodyDetailAvgAggregate, { nullable: true })
	_avg?: BodyDetailAvgAggregate;

	@Field(() => BodyDetailSumAggregate, { nullable: true })
	_sum?: BodyDetailSumAggregate;

	@Field(() => BodyDetailMinAggregate, { nullable: true })
	_min?: BodyDetailMinAggregate;

	@Field(() => BodyDetailMaxAggregate, { nullable: true })
	_max?: BodyDetailMaxAggregate;
}
