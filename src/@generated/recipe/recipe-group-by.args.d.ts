import { RecipeWhereInput } from './recipe-where.input';
import { RecipeOrderByWithAggregationInput } from './recipe-order-by-with-aggregation.input';
import { RecipeScalarFieldEnum } from './recipe-scalar-field.enum';
import { RecipeScalarWhereWithAggregatesInput } from './recipe-scalar-where-with-aggregates.input';
import { RecipeCountAggregateInput } from './recipe-count-aggregate.input';
import { RecipeAvgAggregateInput } from './recipe-avg-aggregate.input';
import { RecipeSumAggregateInput } from './recipe-sum-aggregate.input';
import { RecipeMinAggregateInput } from './recipe-min-aggregate.input';
import { RecipeMaxAggregateInput } from './recipe-max-aggregate.input';
export declare class RecipeGroupByArgs {
    where?: RecipeWhereInput;
    orderBy?: Array<RecipeOrderByWithAggregationInput>;
    by: Array<keyof typeof RecipeScalarFieldEnum>;
    having?: RecipeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecipeCountAggregateInput;
    _avg?: RecipeAvgAggregateInput;
    _sum?: RecipeSumAggregateInput;
    _min?: RecipeMinAggregateInput;
    _max?: RecipeMaxAggregateInput;
}
