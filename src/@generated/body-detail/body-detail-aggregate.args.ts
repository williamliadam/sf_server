import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyDetailWhereInput } from './body-detail-where.input';
import { Type } from 'class-transformer';
import { BodyDetailOrderByWithRelationInput } from './body-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BodyDetailCountAggregateInput } from './body-detail-count-aggregate.input';
import { BodyDetailAvgAggregateInput } from './body-detail-avg-aggregate.input';
import { BodyDetailSumAggregateInput } from './body-detail-sum-aggregate.input';
import { BodyDetailMinAggregateInput } from './body-detail-min-aggregate.input';
import { BodyDetailMaxAggregateInput } from './body-detail-max-aggregate.input';

@ArgsType()
export class BodyDetailAggregateArgs {
	@Field(() => BodyDetailWhereInput, { nullable: true })
	@Type(() => BodyDetailWhereInput)
	where?: BodyDetailWhereInput;

	@Field(() => [BodyDetailOrderByWithRelationInput], { nullable: true })
	orderBy?: Array<BodyDetailOrderByWithRelationInput>;

	@Field(() => BodyDetailWhereUniqueInput, { nullable: true })
	cursor?: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;

	@Field(() => Int, { nullable: true })
	take?: number;

	@Field(() => Int, { nullable: true })
	skip?: number;

	@Field(() => BodyDetailCountAggregateInput, { nullable: true })
	_count?: BodyDetailCountAggregateInput;

	@Field(() => BodyDetailAvgAggregateInput, { nullable: true })
	_avg?: BodyDetailAvgAggregateInput;

	@Field(() => BodyDetailSumAggregateInput, { nullable: true })
	_sum?: BodyDetailSumAggregateInput;

	@Field(() => BodyDetailMinAggregateInput, { nullable: true })
	_min?: BodyDetailMinAggregateInput;

	@Field(() => BodyDetailMaxAggregateInput, { nullable: true })
	_max?: BodyDetailMaxAggregateInput;
}
