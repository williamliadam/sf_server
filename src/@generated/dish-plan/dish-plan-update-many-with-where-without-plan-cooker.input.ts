import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanScalarWhereInput } from './dish-plan-scalar-where.input';
import { Type } from 'class-transformer';
import { DishPlanUpdateManyMutationInput } from './dish-plan-update-many-mutation.input';

@InputType()
export class DishPlanUpdateManyWithWhereWithoutPlanCookerInput {
	@Field(() => DishPlanScalarWhereInput, { nullable: false })
	@Type(() => DishPlanScalarWhereInput)
	where!: DishPlanScalarWhereInput;

	@Field(() => DishPlanUpdateManyMutationInput, { nullable: false })
	@Type(() => DishPlanUpdateManyMutationInput)
	data!: DishPlanUpdateManyMutationInput;
}
