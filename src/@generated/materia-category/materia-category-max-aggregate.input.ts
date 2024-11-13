import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MateriaCategoryMaxAggregateInput {
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
}
