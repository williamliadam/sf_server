import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeMaxAggregate {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: true })
	name?: string;

	@Field(() => Int, { nullable: true })
	stars?: number;

	@Field(() => Int, { nullable: true })
	authorId?: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;
}
