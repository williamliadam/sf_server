import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Goal } from '../prisma/goal.enum';

@ObjectType()
export class ProfileMinAggregate {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: true })
	avatar?: string;

	@Field(() => String, { nullable: true })
	nickName?: string;

	@Field(() => Int, { nullable: true })
	userId?: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => Goal, { nullable: true })
	goal?: keyof typeof Goal;
}
