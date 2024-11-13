import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTemplateWhereInput } from './dish-template-where.input';
import { Type } from 'class-transformer';
import { DishTemplateOrderByWithAggregationInput } from './dish-template-order-by-with-aggregation.input';
import { DishTemplateScalarFieldEnum } from './dish-template-scalar-field.enum';
import { DishTemplateScalarWhereWithAggregatesInput } from './dish-template-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DishTemplateCountAggregateInput } from './dish-template-count-aggregate.input';
import { DishTemplateAvgAggregateInput } from './dish-template-avg-aggregate.input';
import { DishTemplateSumAggregateInput } from './dish-template-sum-aggregate.input';
import { DishTemplateMinAggregateInput } from './dish-template-min-aggregate.input';
import { DishTemplateMaxAggregateInput } from './dish-template-max-aggregate.input';

@ArgsType()
export class DishTemplateGroupByArgs {
	@Field(() => DishTemplateWhereInput, { nullable: true })
	@Type(() => DishTemplateWhereInput)
	where?: DishTemplateWhereInput;

	@Field(() => [DishTemplateOrderByWithAggregationInput], { nullable: true })
	orderBy?: Array<DishTemplateOrderByWithAggregationInput>;

	@Field(() => [DishTemplateScalarFieldEnum], { nullable: false })
	by!: Array<keyof typeof DishTemplateScalarFieldEnum>;

	@Field(() => DishTemplateScalarWhereWithAggregatesInput, { nullable: true })
	having?: DishTemplateScalarWhereWithAggregatesInput;

	@Field(() => Int, { nullable: true })
	take?: number;

	@Field(() => Int, { nullable: true })
	skip?: number;

	@Field(() => DishTemplateCountAggregateInput, { nullable: true })
	_count?: DishTemplateCountAggregateInput;

	@Field(() => DishTemplateAvgAggregateInput, { nullable: true })
	_avg?: DishTemplateAvgAggregateInput;

	@Field(() => DishTemplateSumAggregateInput, { nullable: true })
	_sum?: DishTemplateSumAggregateInput;

	@Field(() => DishTemplateMinAggregateInput, { nullable: true })
	_min?: DishTemplateMinAggregateInput;

	@Field(() => DishTemplateMaxAggregateInput, { nullable: true })
	_max?: DishTemplateMaxAggregateInput;
}
