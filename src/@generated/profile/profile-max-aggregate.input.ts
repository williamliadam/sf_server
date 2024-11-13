import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileMaxAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	avatar?: true;

	@Field(() => Boolean, { nullable: true })
	nickName?: true;

	@Field(() => Boolean, { nullable: true })
	userId?: true;

	@Field(() => Boolean, { nullable: true })
	createdAt?: true;

	@Field(() => Boolean, { nullable: true })
	updatedAt?: true;

	@Field(() => Boolean, { nullable: true })
	goal?: true;
}
