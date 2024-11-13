import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProfileMaxOrderByAggregateInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	avatar?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	nickName?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	userId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	goal?: keyof typeof SortOrder;
}
