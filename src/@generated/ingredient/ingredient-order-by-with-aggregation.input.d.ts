import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { IngredientCountOrderByAggregateInput } from './ingredient-count-order-by-aggregate.input';
import { IngredientAvgOrderByAggregateInput } from './ingredient-avg-order-by-aggregate.input';
import { IngredientMaxOrderByAggregateInput } from './ingredient-max-order-by-aggregate.input';
import { IngredientMinOrderByAggregateInput } from './ingredient-min-order-by-aggregate.input';
import { IngredientSumOrderByAggregateInput } from './ingredient-sum-order-by-aggregate.input';
export declare class IngredientOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    materialId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    materiaUnitId?: keyof typeof SortOrder;
    recipeId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: IngredientCountOrderByAggregateInput;
    _avg?: IngredientAvgOrderByAggregateInput;
    _max?: IngredientMaxOrderByAggregateInput;
    _min?: IngredientMinOrderByAggregateInput;
    _sum?: IngredientSumOrderByAggregateInput;
}
