import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MethodWhereInput } from './method-where.input';
import { Type } from 'class-transformer';
import { MethodOrderByWithAggregationInput } from './method-order-by-with-aggregation.input';
import { MethodScalarFieldEnum } from './method-scalar-field.enum';
import { MethodScalarWhereWithAggregatesInput } from './method-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MethodCountAggregateInput } from './method-count-aggregate.input';
import { MethodAvgAggregateInput } from './method-avg-aggregate.input';
import { MethodSumAggregateInput } from './method-sum-aggregate.input';
import { MethodMinAggregateInput } from './method-min-aggregate.input';
import { MethodMaxAggregateInput } from './method-max-aggregate.input';

@ArgsType()
export class MethodGroupByArgs {
	@Field(() => MethodWhereInput, { nullable: true })
	@Type(() => MethodWhereInput)
	where?: MethodWhereInput;

	@Field(() => [MethodOrderByWithAggregationInput], { nullable: true })
	orderBy?: Array<MethodOrderByWithAggregationInput>;

	@Field(() => [MethodScalarFieldEnum], { nullable: false })
	by!: Array<keyof typeof MethodScalarFieldEnum>;

	@Field(() => MethodScalarWhereWithAggregatesInput, { nullable: true })
	having?: MethodScalarWhereWithAggregatesInput;

	@Field(() => Int, { nullable: true })
	take?: number;

	@Field(() => Int, { nullable: true })
	skip?: number;

	@Field(() => MethodCountAggregateInput, { nullable: true })
	_count?: MethodCountAggregateInput;

	@Field(() => MethodAvgAggregateInput, { nullable: true })
	_avg?: MethodAvgAggregateInput;

	@Field(() => MethodSumAggregateInput, { nullable: true })
	_sum?: MethodSumAggregateInput;

	@Field(() => MethodMinAggregateInput, { nullable: true })
	_min?: MethodMinAggregateInput;

	@Field(() => MethodMaxAggregateInput, { nullable: true })
	_max?: MethodMaxAggregateInput;
}
