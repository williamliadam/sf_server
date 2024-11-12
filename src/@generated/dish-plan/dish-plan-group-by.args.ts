import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishPlanWhereInput } from './dish-plan-where.input';
import { Type } from 'class-transformer';
import { DishPlanOrderByWithAggregationInput } from './dish-plan-order-by-with-aggregation.input';
import { DishPlanScalarFieldEnum } from './dish-plan-scalar-field.enum';
import { DishPlanScalarWhereWithAggregatesInput } from './dish-plan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DishPlanCountAggregateInput } from './dish-plan-count-aggregate.input';
import { DishPlanAvgAggregateInput } from './dish-plan-avg-aggregate.input';
import { DishPlanSumAggregateInput } from './dish-plan-sum-aggregate.input';
import { DishPlanMinAggregateInput } from './dish-plan-min-aggregate.input';
import { DishPlanMaxAggregateInput } from './dish-plan-max-aggregate.input';

@ArgsType()
export class DishPlanGroupByArgs {

    @Field(() => DishPlanWhereInput, {nullable:true})
    @Type(() => DishPlanWhereInput)
    where?: DishPlanWhereInput;

    @Field(() => [DishPlanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DishPlanOrderByWithAggregationInput>;

    @Field(() => [DishPlanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DishPlanScalarFieldEnum>;

    @Field(() => DishPlanScalarWhereWithAggregatesInput, {nullable:true})
    having?: DishPlanScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DishPlanCountAggregateInput, {nullable:true})
    _count?: DishPlanCountAggregateInput;

    @Field(() => DishPlanAvgAggregateInput, {nullable:true})
    _avg?: DishPlanAvgAggregateInput;

    @Field(() => DishPlanSumAggregateInput, {nullable:true})
    _sum?: DishPlanSumAggregateInput;

    @Field(() => DishPlanMinAggregateInput, {nullable:true})
    _min?: DishPlanMinAggregateInput;

    @Field(() => DishPlanMaxAggregateInput, {nullable:true})
    _max?: DishPlanMaxAggregateInput;
}
