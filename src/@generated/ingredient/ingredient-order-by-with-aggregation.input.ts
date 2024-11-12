import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { IngredientCountOrderByAggregateInput } from './ingredient-count-order-by-aggregate.input';
import { IngredientAvgOrderByAggregateInput } from './ingredient-avg-order-by-aggregate.input';
import { IngredientMaxOrderByAggregateInput } from './ingredient-max-order-by-aggregate.input';
import { IngredientMinOrderByAggregateInput } from './ingredient-min-order-by-aggregate.input';
import { IngredientSumOrderByAggregateInput } from './ingredient-sum-order-by-aggregate.input';

@InputType()
export class IngredientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    materialId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    materiaUnitId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    recipeId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => IngredientCountOrderByAggregateInput, {nullable:true})
    _count?: IngredientCountOrderByAggregateInput;

    @Field(() => IngredientAvgOrderByAggregateInput, {nullable:true})
    _avg?: IngredientAvgOrderByAggregateInput;

    @Field(() => IngredientMaxOrderByAggregateInput, {nullable:true})
    _max?: IngredientMaxOrderByAggregateInput;

    @Field(() => IngredientMinOrderByAggregateInput, {nullable:true})
    _min?: IngredientMinOrderByAggregateInput;

    @Field(() => IngredientSumOrderByAggregateInput, {nullable:true})
    _sum?: IngredientSumOrderByAggregateInput;
}
