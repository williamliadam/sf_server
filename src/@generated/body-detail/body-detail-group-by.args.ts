import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyDetailWhereInput } from './body-detail-where.input';
import { Type } from 'class-transformer';
import { BodyDetailOrderByWithAggregationInput } from './body-detail-order-by-with-aggregation.input';
import { BodyDetailScalarFieldEnum } from './body-detail-scalar-field.enum';
import { BodyDetailScalarWhereWithAggregatesInput } from './body-detail-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BodyDetailCountAggregateInput } from './body-detail-count-aggregate.input';
import { BodyDetailAvgAggregateInput } from './body-detail-avg-aggregate.input';
import { BodyDetailSumAggregateInput } from './body-detail-sum-aggregate.input';
import { BodyDetailMinAggregateInput } from './body-detail-min-aggregate.input';
import { BodyDetailMaxAggregateInput } from './body-detail-max-aggregate.input';

@ArgsType()
export class BodyDetailGroupByArgs {

    @Field(() => BodyDetailWhereInput, {nullable:true})
    @Type(() => BodyDetailWhereInput)
    where?: BodyDetailWhereInput;

    @Field(() => [BodyDetailOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BodyDetailOrderByWithAggregationInput>;

    @Field(() => [BodyDetailScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BodyDetailScalarFieldEnum>;

    @Field(() => BodyDetailScalarWhereWithAggregatesInput, {nullable:true})
    having?: BodyDetailScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BodyDetailCountAggregateInput, {nullable:true})
    _count?: BodyDetailCountAggregateInput;

    @Field(() => BodyDetailAvgAggregateInput, {nullable:true})
    _avg?: BodyDetailAvgAggregateInput;

    @Field(() => BodyDetailSumAggregateInput, {nullable:true})
    _sum?: BodyDetailSumAggregateInput;

    @Field(() => BodyDetailMinAggregateInput, {nullable:true})
    _min?: BodyDetailMinAggregateInput;

    @Field(() => BodyDetailMaxAggregateInput, {nullable:true})
    _max?: BodyDetailMaxAggregateInput;
}
