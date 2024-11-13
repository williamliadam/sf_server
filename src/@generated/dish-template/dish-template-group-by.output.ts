import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DishTemplateCountAggregate } from './dish-template-count-aggregate.output';
import { DishTemplateAvgAggregate } from './dish-template-avg-aggregate.output';
import { DishTemplateSumAggregate } from './dish-template-sum-aggregate.output';
import { DishTemplateMinAggregate } from './dish-template-min-aggregate.output';
import { DishTemplateMaxAggregate } from './dish-template-max-aggregate.output';

@ObjectType()
export class DishTemplateGroupBy {
	@Field(() => Int, { nullable: false })
	id!: number;

	@Field(() => Int, { nullable: false })
	recipeId!: number;

	@Field(() => Int, { nullable: false })
	amount!: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date | string;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date | string;

	@Field(() => Int, { nullable: true })
	mealTemplateId?: number;

	@Field(() => DishTemplateCountAggregate, { nullable: true })
	_count?: DishTemplateCountAggregate;

	@Field(() => DishTemplateAvgAggregate, { nullable: true })
	_avg?: DishTemplateAvgAggregate;

	@Field(() => DishTemplateSumAggregate, { nullable: true })
	_sum?: DishTemplateSumAggregate;

	@Field(() => DishTemplateMinAggregate, { nullable: true })
	_min?: DishTemplateMinAggregate;

	@Field(() => DishTemplateMaxAggregate, { nullable: true })
	_max?: DishTemplateMaxAggregate;
}
