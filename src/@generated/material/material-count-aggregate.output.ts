import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MaterialCountAggregate {
	@Field(() => Int, { nullable: false })
	id!: number;

	@Field(() => Int, { nullable: false })
	name!: number;

	@Field(() => Int, { nullable: false })
	code!: number;

	@Field(() => Int, { nullable: false })
	nickName!: number;

	@Field(() => Int, { nullable: false })
	materiaCategoryId!: number;

	@Field(() => Int, { nullable: false })
	createdAt!: number;

	@Field(() => Int, { nullable: false })
	updatedAt!: number;

	@Field(() => Int, { nullable: false })
	_all!: number;
}
