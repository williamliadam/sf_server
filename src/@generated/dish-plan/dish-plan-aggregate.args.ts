import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishPlanWhereInput } from './dish-plan-where.input';
import { Type } from 'class-transformer';
import { DishPlanOrderByWithRelationInput } from './dish-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DishPlanCountAggregateInput } from './dish-plan-count-aggregate.input';
import { DishPlanAvgAggregateInput } from './dish-plan-avg-aggregate.input';
import { DishPlanSumAggregateInput } from './dish-plan-sum-aggregate.input';
import { DishPlanMinAggregateInput } from './dish-plan-min-aggregate.input';
import { DishPlanMaxAggregateInput } from './dish-plan-max-aggregate.input';

@ArgsType()
export class DishPlanAggregateArgs {
	@Field(() => DishPlanWhereInput, { nullable: true })
	@Type(() => DishPlanWhereInput)
	where?: DishPlanWhereInput;

	@Field(() => [DishPlanOrderByWithRelationInput], { nullable: true })
	orderBy?: Array<DishPlanOrderByWithRelationInput>;

	@Field(() => DishPlanWhereUniqueInput, { nullable: true })
	cursor?: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

	@Field(() => Int, { nullable: true })
	take?: number;

	@Field(() => Int, { nullable: true })
	skip?: number;

	@Field(() => DishPlanCountAggregateInput, { nullable: true })
	_count?: DishPlanCountAggregateInput;

	@Field(() => DishPlanAvgAggregateInput, { nullable: true })
	_avg?: DishPlanAvgAggregateInput;

	@Field(() => DishPlanSumAggregateInput, { nullable: true })
	_sum?: DishPlanSumAggregateInput;

	@Field(() => DishPlanMinAggregateInput, { nullable: true })
	_min?: DishPlanMinAggregateInput;

	@Field(() => DishPlanMaxAggregateInput, { nullable: true })
	_max?: DishPlanMaxAggregateInput;
}
