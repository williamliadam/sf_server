import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BodyDetailCountOrderByAggregateInput } from './body-detail-count-order-by-aggregate.input';
import { BodyDetailAvgOrderByAggregateInput } from './body-detail-avg-order-by-aggregate.input';
import { BodyDetailMaxOrderByAggregateInput } from './body-detail-max-order-by-aggregate.input';
import { BodyDetailMinOrderByAggregateInput } from './body-detail-min-order-by-aggregate.input';
import { BodyDetailSumOrderByAggregateInput } from './body-detail-sum-order-by-aggregate.input';

@InputType()
export class BodyDetailOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    weight?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    height?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    age?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bmi?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bmr?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tdee?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BodyDetailCountOrderByAggregateInput, {nullable:true})
    _count?: BodyDetailCountOrderByAggregateInput;

    @Field(() => BodyDetailAvgOrderByAggregateInput, {nullable:true})
    _avg?: BodyDetailAvgOrderByAggregateInput;

    @Field(() => BodyDetailMaxOrderByAggregateInput, {nullable:true})
    _max?: BodyDetailMaxOrderByAggregateInput;

    @Field(() => BodyDetailMinOrderByAggregateInput, {nullable:true})
    _min?: BodyDetailMinOrderByAggregateInput;

    @Field(() => BodyDetailSumOrderByAggregateInput, {nullable:true})
    _sum?: BodyDetailSumOrderByAggregateInput;
}
