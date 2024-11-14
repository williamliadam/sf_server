import { MethodWhereInput } from './method-where.input';
import { MethodOrderByWithAggregationInput } from './method-order-by-with-aggregation.input';
import { MethodScalarFieldEnum } from './method-scalar-field.enum';
import { MethodScalarWhereWithAggregatesInput } from './method-scalar-where-with-aggregates.input';
import { MethodCountAggregateInput } from './method-count-aggregate.input';
import { MethodAvgAggregateInput } from './method-avg-aggregate.input';
import { MethodSumAggregateInput } from './method-sum-aggregate.input';
import { MethodMinAggregateInput } from './method-min-aggregate.input';
import { MethodMaxAggregateInput } from './method-max-aggregate.input';
export declare class MethodGroupByArgs {
    where?: MethodWhereInput;
    orderBy?: Array<MethodOrderByWithAggregationInput>;
    by: Array<keyof typeof MethodScalarFieldEnum>;
    having?: MethodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MethodCountAggregateInput;
    _avg?: MethodAvgAggregateInput;
    _sum?: MethodSumAggregateInput;
    _min?: MethodMinAggregateInput;
    _max?: MethodMaxAggregateInput;
}
