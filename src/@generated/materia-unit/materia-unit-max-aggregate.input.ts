import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MateriaUnitMaxAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	code?: true;

	@Field(() => Boolean, { nullable: true })
	name?: true;

	@Field(() => Boolean, { nullable: true })
	toKilo?: true;

	@Field(() => Boolean, { nullable: true })
	createdAt?: true;

	@Field(() => Boolean, { nullable: true })
	updatedAt?: true;
}
