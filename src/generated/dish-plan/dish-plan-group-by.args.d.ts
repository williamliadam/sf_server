import { DishPlanWhereInput } from './dish-plan-where.input';
import { DishPlanOrderByWithAggregationInput } from './dish-plan-order-by-with-aggregation.input';
import { DishPlanScalarFieldEnum } from './dish-plan-scalar-field.enum';
import { DishPlanScalarWhereWithAggregatesInput } from './dish-plan-scalar-where-with-aggregates.input';
import { DishPlanCountAggregateInput } from './dish-plan-count-aggregate.input';
import { DishPlanAvgAggregateInput } from './dish-plan-avg-aggregate.input';
import { DishPlanSumAggregateInput } from './dish-plan-sum-aggregate.input';
import { DishPlanMinAggregateInput } from './dish-plan-min-aggregate.input';
import { DishPlanMaxAggregateInput } from './dish-plan-max-aggregate.input';
export declare class DishPlanGroupByArgs {
    where?: DishPlanWhereInput;
    orderBy?: Array<DishPlanOrderByWithAggregationInput>;
    by: Array<keyof typeof DishPlanScalarFieldEnum>;
    having?: DishPlanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DishPlanCountAggregateInput;
    _avg?: DishPlanAvgAggregateInput;
    _sum?: DishPlanSumAggregateInput;
    _min?: DishPlanMinAggregateInput;
    _max?: DishPlanMaxAggregateInput;
}
