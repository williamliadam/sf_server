import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DishTemplateCountAggregate } from './dish-template-count-aggregate.output';
import { DishTemplateAvgAggregate } from './dish-template-avg-aggregate.output';
import { DishTemplateSumAggregate } from './dish-template-sum-aggregate.output';
import { DishTemplateMinAggregate } from './dish-template-min-aggregate.output';
import { DishTemplateMaxAggregate } from './dish-template-max-aggregate.output';

@ObjectType()
export class AggregateDishTemplate {
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
