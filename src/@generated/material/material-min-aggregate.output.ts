import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MaterialMinAggregate {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: true })
	name?: string;

	@Field(() => String, { nullable: true })
	code?: string;

	@Field(() => String, { nullable: true })
	nickName?: string;

	@Field(() => Int, { nullable: true })
	materiaCategoryId?: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;
}
