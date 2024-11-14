import { MaterialWhereInput } from './material-where.input';
import { MaterialOrderByWithAggregationInput } from './material-order-by-with-aggregation.input';
import { MaterialScalarFieldEnum } from './material-scalar-field.enum';
import { MaterialScalarWhereWithAggregatesInput } from './material-scalar-where-with-aggregates.input';
import { MaterialCountAggregateInput } from './material-count-aggregate.input';
import { MaterialAvgAggregateInput } from './material-avg-aggregate.input';
import { MaterialSumAggregateInput } from './material-sum-aggregate.input';
import { MaterialMinAggregateInput } from './material-min-aggregate.input';
import { MaterialMaxAggregateInput } from './material-max-aggregate.input';
export declare class MaterialGroupByArgs {
    where?: MaterialWhereInput;
    orderBy?: Array<MaterialOrderByWithAggregationInput>;
    by: Array<keyof typeof MaterialScalarFieldEnum>;
    having?: MaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaterialCountAggregateInput;
    _avg?: MaterialAvgAggregateInput;
    _sum?: MaterialSumAggregateInput;
    _min?: MaterialMinAggregateInput;
    _max?: MaterialMaxAggregateInput;
}
