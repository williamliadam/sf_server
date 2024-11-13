import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MateriaCategoryCountAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	code?: true;

	@Field(() => Boolean, { nullable: true })
	name?: true;

	@Field(() => Boolean, { nullable: true })
	lastId?: true;

	@Field(() => Boolean, { nullable: true })
	createdAt?: true;

	@Field(() => Boolean, { nullable: true })
	updatedAt?: true;

	@Field(() => Boolean, { nullable: true })
	_all?: true;
}
