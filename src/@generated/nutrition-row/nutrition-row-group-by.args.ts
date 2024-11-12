import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionRowWhereInput } from './nutrition-row-where.input';
import { Type } from 'class-transformer';
import { NutritionRowOrderByWithAggregationInput } from './nutrition-row-order-by-with-aggregation.input';
import { NutritionRowScalarFieldEnum } from './nutrition-row-scalar-field.enum';
import { NutritionRowScalarWhereWithAggregatesInput } from './nutrition-row-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NutritionRowCountAggregateInput } from './nutrition-row-count-aggregate.input';
import { NutritionRowAvgAggregateInput } from './nutrition-row-avg-aggregate.input';
import { NutritionRowSumAggregateInput } from './nutrition-row-sum-aggregate.input';
import { NutritionRowMinAggregateInput } from './nutrition-row-min-aggregate.input';
import { NutritionRowMaxAggregateInput } from './nutrition-row-max-aggregate.input';

@ArgsType()
export class NutritionRowGroupByArgs {

    @Field(() => NutritionRowWhereInput, {nullable:true})
    @Type(() => NutritionRowWhereInput)
    where?: NutritionRowWhereInput;

    @Field(() => [NutritionRowOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NutritionRowOrderByWithAggregationInput>;

    @Field(() => [NutritionRowScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NutritionRowScalarFieldEnum>;

    @Field(() => NutritionRowScalarWhereWithAggregatesInput, {nullable:true})
    having?: NutritionRowScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NutritionRowCountAggregateInput, {nullable:true})
    _count?: NutritionRowCountAggregateInput;

    @Field(() => NutritionRowAvgAggregateInput, {nullable:true})
    _avg?: NutritionRowAvgAggregateInput;

    @Field(() => NutritionRowSumAggregateInput, {nullable:true})
    _sum?: NutritionRowSumAggregateInput;

    @Field(() => NutritionRowMinAggregateInput, {nullable:true})
    _min?: NutritionRowMinAggregateInput;

    @Field(() => NutritionRowMaxAggregateInput, {nullable:true})
    _max?: NutritionRowMaxAggregateInput;
}
