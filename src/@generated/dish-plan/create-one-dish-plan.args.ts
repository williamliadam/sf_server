import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishPlanCreateInput } from './dish-plan-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDishPlanArgs {
	@Field(() => DishPlanCreateInput, { nullable: false })
	@Type(() => DishPlanCreateInput)
	data!: DishPlanCreateInput;
}
