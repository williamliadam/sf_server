import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DishPlanCountOrderByAggregateInput } from './dish-plan-count-order-by-aggregate.input';
import { DishPlanAvgOrderByAggregateInput } from './dish-plan-avg-order-by-aggregate.input';
import { DishPlanMaxOrderByAggregateInput } from './dish-plan-max-order-by-aggregate.input';
import { DishPlanMinOrderByAggregateInput } from './dish-plan-min-order-by-aggregate.input';
import { DishPlanSumOrderByAggregateInput } from './dish-plan-sum-order-by-aggregate.input';

@InputType()
export class DishPlanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    planCookerId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    mealPlanId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DishPlanCountOrderByAggregateInput, {nullable:true})
    _count?: DishPlanCountOrderByAggregateInput;

    @Field(() => DishPlanAvgOrderByAggregateInput, {nullable:true})
    _avg?: DishPlanAvgOrderByAggregateInput;

    @Field(() => DishPlanMaxOrderByAggregateInput, {nullable:true})
    _max?: DishPlanMaxOrderByAggregateInput;

    @Field(() => DishPlanMinOrderByAggregateInput, {nullable:true})
    _min?: DishPlanMinOrderByAggregateInput;

    @Field(() => DishPlanSumOrderByAggregateInput, {nullable:true})
    _sum?: DishPlanSumOrderByAggregateInput;
}
