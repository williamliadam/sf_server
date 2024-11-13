import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealTemplateWhereInput } from './meal-template-where.input';
import { Type } from 'class-transformer';
import { MealTemplateOrderByWithAggregationInput } from './meal-template-order-by-with-aggregation.input';
import { MealTemplateScalarFieldEnum } from './meal-template-scalar-field.enum';
import { MealTemplateScalarWhereWithAggregatesInput } from './meal-template-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MealTemplateCountAggregateInput } from './meal-template-count-aggregate.input';
import { MealTemplateAvgAggregateInput } from './meal-template-avg-aggregate.input';
import { MealTemplateSumAggregateInput } from './meal-template-sum-aggregate.input';
import { MealTemplateMinAggregateInput } from './meal-template-min-aggregate.input';
import { MealTemplateMaxAggregateInput } from './meal-template-max-aggregate.input';

@ArgsType()
export class MealTemplateGroupByArgs {
	@Field(() => MealTemplateWhereInput, { nullable: true })
	@Type(() => MealTemplateWhereInput)
	where?: MealTemplateWhereInput;

	@Field(() => [MealTemplateOrderByWithAggregationInput], { nullable: true })
	orderBy?: Array<MealTemplateOrderByWithAggregationInput>;

	@Field(() => [MealTemplateScalarFieldEnum], { nullable: false })
	by!: Array<keyof typeof MealTemplateScalarFieldEnum>;

	@Field(() => MealTemplateScalarWhereWithAggregatesInput, { nullable: true })
	having?: MealTemplateScalarWhereWithAggregatesInput;

	@Field(() => Int, { nullable: true })
	take?: number;

	@Field(() => Int, { nullable: true })
	skip?: number;

	@Field(() => MealTemplateCountAggregateInput, { nullable: true })
	_count?: MealTemplateCountAggregateInput;

	@Field(() => MealTemplateAvgAggregateInput, { nullable: true })
	_avg?: MealTemplateAvgAggregateInput;

	@Field(() => MealTemplateSumAggregateInput, { nullable: true })
	_sum?: MealTemplateSumAggregateInput;

	@Field(() => MealTemplateMinAggregateInput, { nullable: true })
	_min?: MealTemplateMinAggregateInput;

	@Field(() => MealTemplateMaxAggregateInput, { nullable: true })
	_max?: MealTemplateMaxAggregateInput;
}
