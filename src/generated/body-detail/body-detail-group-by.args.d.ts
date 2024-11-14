import { BodyDetailWhereInput } from './body-detail-where.input';
import { BodyDetailOrderByWithAggregationInput } from './body-detail-order-by-with-aggregation.input';
import { BodyDetailScalarFieldEnum } from './body-detail-scalar-field.enum';
import { BodyDetailScalarWhereWithAggregatesInput } from './body-detail-scalar-where-with-aggregates.input';
import { BodyDetailCountAggregateInput } from './body-detail-count-aggregate.input';
import { BodyDetailAvgAggregateInput } from './body-detail-avg-aggregate.input';
import { BodyDetailSumAggregateInput } from './body-detail-sum-aggregate.input';
import { BodyDetailMinAggregateInput } from './body-detail-min-aggregate.input';
import { BodyDetailMaxAggregateInput } from './body-detail-max-aggregate.input';
export declare class BodyDetailGroupByArgs {
    where?: BodyDetailWhereInput;
    orderBy?: Array<BodyDetailOrderByWithAggregationInput>;
    by: Array<keyof typeof BodyDetailScalarFieldEnum>;
    having?: BodyDetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BodyDetailCountAggregateInput;
    _avg?: BodyDetailAvgAggregateInput;
    _sum?: BodyDetailSumAggregateInput;
    _min?: BodyDetailMinAggregateInput;
    _max?: BodyDetailMaxAggregateInput;
}
