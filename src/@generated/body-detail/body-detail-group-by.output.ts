import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BodyDetailCountAggregate } from './body-detail-count-aggregate.output';
import { BodyDetailAvgAggregate } from './body-detail-avg-aggregate.output';
import { BodyDetailSumAggregate } from './body-detail-sum-aggregate.output';
import { BodyDetailMinAggregate } from './body-detail-min-aggregate.output';
import { BodyDetailMaxAggregate } from './body-detail-max-aggregate.output';

@ObjectType()
export class BodyDetailGroupBy {
	@Field(() => Int, { nullable: false })
	id!: number;

	@Field(() => Int, { nullable: true })
	weight?: number;

	@Field(() => Int, { nullable: true })
	height?: number;

	@Field(() => Int, { nullable: true })
	age?: number;

	@Field(() => Int, { nullable: true })
	bmi?: number;

	@Field(() => Int, { nullable: true })
	bmr?: number;

	@Field(() => Int, { nullable: true })
	tdee?: number;

	@Field(() => Int, { nullable: false })
	userId!: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date | string;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date | string;

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
