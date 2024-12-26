import { ClientWhereInput } from './client-where.input';
import { ClientOrderByWithAggregationInput } from './client-order-by-with-aggregation.input';
import { ClientScalarFieldEnum } from './client-scalar-field.enum';
import { ClientScalarWhereWithAggregatesInput } from './client-scalar-where-with-aggregates.input';
import { ClientCountAggregateInput } from './client-count-aggregate.input';
import { ClientAvgAggregateInput } from './client-avg-aggregate.input';
import { ClientSumAggregateInput } from './client-sum-aggregate.input';
import { ClientMinAggregateInput } from './client-min-aggregate.input';
import { ClientMaxAggregateInput } from './client-max-aggregate.input';
export declare class ClientGroupByArgs {
    where?: ClientWhereInput;
    orderBy?: Array<ClientOrderByWithAggregationInput>;
    by: Array<keyof typeof ClientScalarFieldEnum>;
    having?: ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInput;
    _avg?: ClientAvgAggregateInput;
    _sum?: ClientSumAggregateInput;
    _min?: ClientMinAggregateInput;
    _max?: ClientMaxAggregateInput;
}
