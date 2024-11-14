import { NutritionWhereInput } from './nutrition-where.input';
import { NutritionOrderByWithAggregationInput } from './nutrition-order-by-with-aggregation.input';
import { NutritionScalarFieldEnum } from './nutrition-scalar-field.enum';
import { NutritionScalarWhereWithAggregatesInput } from './nutrition-scalar-where-with-aggregates.input';
import { NutritionCountAggregateInput } from './nutrition-count-aggregate.input';
import { NutritionAvgAggregateInput } from './nutrition-avg-aggregate.input';
import { NutritionSumAggregateInput } from './nutrition-sum-aggregate.input';
import { NutritionMinAggregateInput } from './nutrition-min-aggregate.input';
import { NutritionMaxAggregateInput } from './nutrition-max-aggregate.input';
export declare class NutritionGroupByArgs {
    where?: NutritionWhereInput;
    orderBy?: Array<NutritionOrderByWithAggregationInput>;
    by: Array<keyof typeof NutritionScalarFieldEnum>;
    having?: NutritionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NutritionCountAggregateInput;
    _avg?: NutritionAvgAggregateInput;
    _sum?: NutritionSumAggregateInput;
    _min?: NutritionMinAggregateInput;
    _max?: NutritionMaxAggregateInput;
}
