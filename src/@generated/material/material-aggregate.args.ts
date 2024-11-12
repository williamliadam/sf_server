import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialWhereInput } from './material-where.input';
import { Type } from 'class-transformer';
import { MaterialOrderByWithRelationInput } from './material-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MaterialCountAggregateInput } from './material-count-aggregate.input';
import { MaterialAvgAggregateInput } from './material-avg-aggregate.input';
import { MaterialSumAggregateInput } from './material-sum-aggregate.input';
import { MaterialMinAggregateInput } from './material-min-aggregate.input';
import { MaterialMaxAggregateInput } from './material-max-aggregate.input';

@ArgsType()
export class MaterialAggregateArgs {

    @Field(() => MaterialWhereInput, {nullable:true})
    @Type(() => MaterialWhereInput)
    where?: MaterialWhereInput;

    @Field(() => [MaterialOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaterialOrderByWithRelationInput>;

    @Field(() => MaterialWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MaterialCountAggregateInput, {nullable:true})
    _count?: MaterialCountAggregateInput;

    @Field(() => MaterialAvgAggregateInput, {nullable:true})
    _avg?: MaterialAvgAggregateInput;

    @Field(() => MaterialSumAggregateInput, {nullable:true})
    _sum?: MaterialSumAggregateInput;

    @Field(() => MaterialMinAggregateInput, {nullable:true})
    _min?: MaterialMinAggregateInput;

    @Field(() => MaterialMaxAggregateInput, {nullable:true})
    _max?: MaterialMaxAggregateInput;
}
