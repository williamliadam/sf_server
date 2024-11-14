import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeCountOrderByAggregateInput } from './recipe-count-order-by-aggregate.input';
import { RecipeAvgOrderByAggregateInput } from './recipe-avg-order-by-aggregate.input';
import { RecipeMaxOrderByAggregateInput } from './recipe-max-order-by-aggregate.input';
import { RecipeMinOrderByAggregateInput } from './recipe-min-order-by-aggregate.input';
import { RecipeSumOrderByAggregateInput } from './recipe-sum-order-by-aggregate.input';
export declare class RecipeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    stars?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: RecipeCountOrderByAggregateInput;
    _avg?: RecipeAvgOrderByAggregateInput;
    _max?: RecipeMaxOrderByAggregateInput;
    _min?: RecipeMinOrderByAggregateInput;
    _sum?: RecipeSumOrderByAggregateInput;
}
