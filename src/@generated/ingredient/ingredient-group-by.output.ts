import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { IngredientCountAggregate } from './ingredient-count-aggregate.output';
import { IngredientAvgAggregate } from './ingredient-avg-aggregate.output';
import { IngredientSumAggregate } from './ingredient-sum-aggregate.output';
import { IngredientMinAggregate } from './ingredient-min-aggregate.output';
import { IngredientMaxAggregate } from './ingredient-max-aggregate.output';

@ObjectType()
export class IngredientGroupBy {
	@Field(() => Int, { nullable: false })
	id!: number;

	@Field(() => Int, { nullable: false })
	materialId!: number;

	@Field(() => Int, { nullable: false })
	amount!: number;

	@Field(() => Int, { nullable: false })
	materiaUnitId!: number;

	@Field(() => Int, { nullable: true })
	recipeId?: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date | string;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date | string;

	@Field(() => IngredientCountAggregate, { nullable: true })
	_count?: IngredientCountAggregate;

	@Field(() => IngredientAvgAggregate, { nullable: true })
	_avg?: IngredientAvgAggregate;

	@Field(() => IngredientSumAggregate, { nullable: true })
	_sum?: IngredientSumAggregate;

	@Field(() => IngredientMinAggregate, { nullable: true })
	_min?: IngredientMinAggregate;

	@Field(() => IngredientMaxAggregate, { nullable: true })
	_max?: IngredientMaxAggregate;
}
