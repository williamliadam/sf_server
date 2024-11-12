import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { Type } from 'class-transformer';
import { MateriaCategoryOrderByWithRelationInput } from './materia-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MateriaCategoryCountAggregateInput } from './materia-category-count-aggregate.input';
import { MateriaCategoryAvgAggregateInput } from './materia-category-avg-aggregate.input';
import { MateriaCategorySumAggregateInput } from './materia-category-sum-aggregate.input';
import { MateriaCategoryMinAggregateInput } from './materia-category-min-aggregate.input';
import { MateriaCategoryMaxAggregateInput } from './materia-category-max-aggregate.input';

@ArgsType()
export class MateriaCategoryAggregateArgs {

    @Field(() => MateriaCategoryWhereInput, {nullable:true})
    @Type(() => MateriaCategoryWhereInput)
    where?: MateriaCategoryWhereInput;

    @Field(() => [MateriaCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MateriaCategoryOrderByWithRelationInput>;

    @Field(() => MateriaCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MateriaCategoryCountAggregateInput, {nullable:true})
    _count?: MateriaCategoryCountAggregateInput;

    @Field(() => MateriaCategoryAvgAggregateInput, {nullable:true})
    _avg?: MateriaCategoryAvgAggregateInput;

    @Field(() => MateriaCategorySumAggregateInput, {nullable:true})
    _sum?: MateriaCategorySumAggregateInput;

    @Field(() => MateriaCategoryMinAggregateInput, {nullable:true})
    _min?: MateriaCategoryMinAggregateInput;

    @Field(() => MateriaCategoryMaxAggregateInput, {nullable:true})
    _max?: MateriaCategoryMaxAggregateInput;
}
