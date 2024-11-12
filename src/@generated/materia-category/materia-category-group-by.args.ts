import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { Type } from 'class-transformer';
import { MateriaCategoryOrderByWithAggregationInput } from './materia-category-order-by-with-aggregation.input';
import { MateriaCategoryScalarFieldEnum } from './materia-category-scalar-field.enum';
import { MateriaCategoryScalarWhereWithAggregatesInput } from './materia-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MateriaCategoryCountAggregateInput } from './materia-category-count-aggregate.input';
import { MateriaCategoryAvgAggregateInput } from './materia-category-avg-aggregate.input';
import { MateriaCategorySumAggregateInput } from './materia-category-sum-aggregate.input';
import { MateriaCategoryMinAggregateInput } from './materia-category-min-aggregate.input';
import { MateriaCategoryMaxAggregateInput } from './materia-category-max-aggregate.input';

@ArgsType()
export class MateriaCategoryGroupByArgs {

    @Field(() => MateriaCategoryWhereInput, {nullable:true})
    @Type(() => MateriaCategoryWhereInput)
    where?: MateriaCategoryWhereInput;

    @Field(() => [MateriaCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MateriaCategoryOrderByWithAggregationInput>;

    @Field(() => [MateriaCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MateriaCategoryScalarFieldEnum>;

    @Field(() => MateriaCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: MateriaCategoryScalarWhereWithAggregatesInput;

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
