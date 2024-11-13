import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealTemplateWhereInput } from './meal-template-where.input';
import { Type } from 'class-transformer';
import { MealTemplateOrderByWithRelationInput } from './meal-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MealTemplateCountAggregateInput } from './meal-template-count-aggregate.input';
import { MealTemplateAvgAggregateInput } from './meal-template-avg-aggregate.input';
import { MealTemplateSumAggregateInput } from './meal-template-sum-aggregate.input';
import { MealTemplateMinAggregateInput } from './meal-template-min-aggregate.input';
import { MealTemplateMaxAggregateInput } from './meal-template-max-aggregate.input';

@ArgsType()
export class MealTemplateAggregateArgs {
	@Field(() => MealTemplateWhereInput, { nullable: true })
	@Type(() => MealTemplateWhereInput)
	where?: MealTemplateWhereInput;

	@Field(() => [MealTemplateOrderByWithRelationInput], { nullable: true })
	orderBy?: Array<MealTemplateOrderByWithRelationInput>;

	@Field(() => MealTemplateWhereUniqueInput, { nullable: true })
	cursor?: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;

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
