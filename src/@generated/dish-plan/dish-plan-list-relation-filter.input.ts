import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanWhereInput } from './dish-plan-where.input';

@InputType()
export class DishPlanListRelationFilter {
	@Field(() => DishPlanWhereInput, { nullable: true })
	every?: DishPlanWhereInput;

	@Field(() => DishPlanWhereInput, { nullable: true })
	some?: DishPlanWhereInput;

	@Field(() => DishPlanWhereInput, { nullable: true })
	none?: DishPlanWhereInput;
}
