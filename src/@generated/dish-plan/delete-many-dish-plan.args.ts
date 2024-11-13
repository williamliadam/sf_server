import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishPlanWhereInput } from './dish-plan-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDishPlanArgs {
	@Field(() => DishPlanWhereInput, { nullable: true })
	@Type(() => DishPlanWhereInput)
	where?: DishPlanWhereInput;
}
