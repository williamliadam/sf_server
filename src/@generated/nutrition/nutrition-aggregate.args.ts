import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionWhereInput } from './nutrition-where.input';
import { Type } from 'class-transformer';
import { NutritionOrderByWithRelationInput } from './nutrition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionCountAggregateInput } from './nutrition-count-aggregate.input';
import { NutritionAvgAggregateInput } from './nutrition-avg-aggregate.input';
import { NutritionSumAggregateInput } from './nutrition-sum-aggregate.input';
import { NutritionMinAggregateInput } from './nutrition-min-aggregate.input';
import { NutritionMaxAggregateInput } from './nutrition-max-aggregate.input';

@ArgsType()
export class NutritionAggregateArgs {
	@Field(() => NutritionWhereInput, { nullable: true })
	@Type(() => NutritionWhereInput)
	where?: NutritionWhereInput;

	@Field(() => [NutritionOrderByWithRelationInput], { nullable: true })
	orderBy?: Array<NutritionOrderByWithRelationInput>;

	@Field(() => NutritionWhereUniqueInput, { nullable: true })
	cursor?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;

	@Field(() => Int, { nullable: true })
	take?: number;

	@Field(() => Int, { nullable: true })
	skip?: number;

	@Field(() => NutritionCountAggregateInput, { nullable: true })
	_count?: NutritionCountAggregateInput;

	@Field(() => NutritionAvgAggregateInput, { nullable: true })
	_avg?: NutritionAvgAggregateInput;

	@Field(() => NutritionSumAggregateInput, { nullable: true })
	_sum?: NutritionSumAggregateInput;

	@Field(() => NutritionMinAggregateInput, { nullable: true })
	_min?: NutritionMinAggregateInput;

	@Field(() => NutritionMaxAggregateInput, { nullable: true })
	_max?: NutritionMaxAggregateInput;
}
