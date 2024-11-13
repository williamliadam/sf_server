import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DishPlanOrderByRelationAggregateInput } from '../dish-plan/dish-plan-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class MealPlanOrderByWithRelationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder;

	@Field(() => SortOrderInput, { nullable: true })
	planTime?: SortOrderInput;

	@Field(() => SortOrder, { nullable: true })
	userId?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder;

	@Field(() => SortOrder, { nullable: true })
	type?: keyof typeof SortOrder;

	@Field(() => DishPlanOrderByRelationAggregateInput, { nullable: true })
	dishPlans?: DishPlanOrderByRelationAggregateInput;

	@Field(() => UserOrderByWithRelationInput, { nullable: true })
	createBy?: UserOrderByWithRelationInput;
}
