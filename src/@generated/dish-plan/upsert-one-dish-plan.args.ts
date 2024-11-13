import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';
import { DishPlanCreateInput } from './dish-plan-create.input';
import { DishPlanUpdateInput } from './dish-plan-update.input';

@ArgsType()
export class UpsertOneDishPlanArgs {
	@Field(() => DishPlanWhereUniqueInput, { nullable: false })
	@Type(() => DishPlanWhereUniqueInput)
	where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

	@Field(() => DishPlanCreateInput, { nullable: false })
	@Type(() => DishPlanCreateInput)
	create!: DishPlanCreateInput;

	@Field(() => DishPlanUpdateInput, { nullable: false })
	@Type(() => DishPlanUpdateInput)
	update!: DishPlanUpdateInput;
}
