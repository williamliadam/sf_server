import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Goal } from '../prisma/goal.enum';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileAvgAggregate } from './profile-avg-aggregate.output';
import { ProfileSumAggregate } from './profile-sum-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';

@ObjectType()
export class ProfileGroupBy {
	@Field(() => Int, { nullable: false })
	id!: number;

	@Field(() => String, { nullable: true })
	avatar?: string;

	@Field(() => String, { nullable: true })
	nickName?: string;

	@Field(() => Int, { nullable: false })
	userId!: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date | string;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date | string;

	@Field(() => Goal, { nullable: false })
	goal!: keyof typeof Goal;

	@Field(() => ProfileCountAggregate, { nullable: true })
	_count?: ProfileCountAggregate;

	@Field(() => ProfileAvgAggregate, { nullable: true })
	_avg?: ProfileAvgAggregate;

	@Field(() => ProfileSumAggregate, { nullable: true })
	_sum?: ProfileSumAggregate;

	@Field(() => ProfileMinAggregate, { nullable: true })
	_min?: ProfileMinAggregate;

	@Field(() => ProfileMaxAggregate, { nullable: true })
	_max?: ProfileMaxAggregate;
}
