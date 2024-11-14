import { MealPlanWhereInput } from './meal-plan-where.input';
import { MealPlanOrderByWithAggregationInput } from './meal-plan-order-by-with-aggregation.input';
import { MealPlanScalarFieldEnum } from './meal-plan-scalar-field.enum';
import { MealPlanScalarWhereWithAggregatesInput } from './meal-plan-scalar-where-with-aggregates.input';
import { MealPlanCountAggregateInput } from './meal-plan-count-aggregate.input';
import { MealPlanAvgAggregateInput } from './meal-plan-avg-aggregate.input';
import { MealPlanSumAggregateInput } from './meal-plan-sum-aggregate.input';
import { MealPlanMinAggregateInput } from './meal-plan-min-aggregate.input';
import { MealPlanMaxAggregateInput } from './meal-plan-max-aggregate.input';
export declare class MealPlanGroupByArgs {
    where?: MealPlanWhereInput;
    orderBy?: Array<MealPlanOrderByWithAggregationInput>;
    by: Array<keyof typeof MealPlanScalarFieldEnum>;
    having?: MealPlanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MealPlanCountAggregateInput;
    _avg?: MealPlanAvgAggregateInput;
    _sum?: MealPlanSumAggregateInput;
    _min?: MealPlanMinAggregateInput;
    _max?: MealPlanMaxAggregateInput;
}
