import { NutritionRowWhereInput } from './nutrition-row-where.input';
import { NutritionRowOrderByWithAggregationInput } from './nutrition-row-order-by-with-aggregation.input';
import { NutritionRowScalarFieldEnum } from './nutrition-row-scalar-field.enum';
import { NutritionRowScalarWhereWithAggregatesInput } from './nutrition-row-scalar-where-with-aggregates.input';
import { NutritionRowCountAggregateInput } from './nutrition-row-count-aggregate.input';
import { NutritionRowAvgAggregateInput } from './nutrition-row-avg-aggregate.input';
import { NutritionRowSumAggregateInput } from './nutrition-row-sum-aggregate.input';
import { NutritionRowMinAggregateInput } from './nutrition-row-min-aggregate.input';
import { NutritionRowMaxAggregateInput } from './nutrition-row-max-aggregate.input';
export declare class NutritionRowGroupByArgs {
    where?: NutritionRowWhereInput;
    orderBy?: Array<NutritionRowOrderByWithAggregationInput>;
    by: Array<keyof typeof NutritionRowScalarFieldEnum>;
    having?: NutritionRowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NutritionRowCountAggregateInput;
    _avg?: NutritionRowAvgAggregateInput;
    _sum?: NutritionRowSumAggregateInput;
    _min?: NutritionRowMinAggregateInput;
    _max?: NutritionRowMaxAggregateInput;
}
