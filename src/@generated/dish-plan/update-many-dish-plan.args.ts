import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishPlanUpdateManyMutationInput } from './dish-plan-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DishPlanWhereInput } from './dish-plan-where.input';

@ArgsType()
export class UpdateManyDishPlanArgs {
	@Field(() => DishPlanUpdateManyMutationInput, { nullable: false })
	@Type(() => DishPlanUpdateManyMutationInput)
	data!: DishPlanUpdateManyMutationInput;

	@Field(() => DishPlanWhereInput, { nullable: true })
	@Type(() => DishPlanWhereInput)
	where?: DishPlanWhereInput;
}
