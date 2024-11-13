import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NutritionCountAggregate } from './nutrition-count-aggregate.output';
import { NutritionAvgAggregate } from './nutrition-avg-aggregate.output';
import { NutritionSumAggregate } from './nutrition-sum-aggregate.output';
import { NutritionMinAggregate } from './nutrition-min-aggregate.output';
import { NutritionMaxAggregate } from './nutrition-max-aggregate.output';

@ObjectType()
export class AggregateNutrition {
	@Field(() => NutritionCountAggregate, { nullable: true })
	_count?: NutritionCountAggregate;

	@Field(() => NutritionAvgAggregate, { nullable: true })
	_avg?: NutritionAvgAggregate;

	@Field(() => NutritionSumAggregate, { nullable: true })
	_sum?: NutritionSumAggregate;

	@Field(() => NutritionMinAggregate, { nullable: true })
	_min?: NutritionMinAggregate;

	@Field(() => NutritionMaxAggregate, { nullable: true })
	_max?: NutritionMaxAggregate;
}
