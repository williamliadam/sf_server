import { IngredientWhereInput } from './ingredient-where.input';
import { IngredientOrderByWithAggregationInput } from './ingredient-order-by-with-aggregation.input';
import { IngredientScalarFieldEnum } from './ingredient-scalar-field.enum';
import { IngredientScalarWhereWithAggregatesInput } from './ingredient-scalar-where-with-aggregates.input';
import { IngredientCountAggregateInput } from './ingredient-count-aggregate.input';
import { IngredientAvgAggregateInput } from './ingredient-avg-aggregate.input';
import { IngredientSumAggregateInput } from './ingredient-sum-aggregate.input';
import { IngredientMinAggregateInput } from './ingredient-min-aggregate.input';
import { IngredientMaxAggregateInput } from './ingredient-max-aggregate.input';
export declare class IngredientGroupByArgs {
    where?: IngredientWhereInput;
    orderBy?: Array<IngredientOrderByWithAggregationInput>;
    by: Array<keyof typeof IngredientScalarFieldEnum>;
    having?: IngredientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IngredientCountAggregateInput;
    _avg?: IngredientAvgAggregateInput;
    _sum?: IngredientSumAggregateInput;
    _min?: IngredientMinAggregateInput;
    _max?: IngredientMaxAggregateInput;
}
