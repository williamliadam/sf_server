import { UserAuthWhereInput } from './user-auth-where.input';
import { UserAuthOrderByWithAggregationInput } from './user-auth-order-by-with-aggregation.input';
import { UserAuthScalarFieldEnum } from './user-auth-scalar-field.enum';
import { UserAuthScalarWhereWithAggregatesInput } from './user-auth-scalar-where-with-aggregates.input';
import { UserAuthCountAggregateInput } from './user-auth-count-aggregate.input';
import { UserAuthAvgAggregateInput } from './user-auth-avg-aggregate.input';
import { UserAuthSumAggregateInput } from './user-auth-sum-aggregate.input';
import { UserAuthMinAggregateInput } from './user-auth-min-aggregate.input';
import { UserAuthMaxAggregateInput } from './user-auth-max-aggregate.input';
export declare class UserAuthGroupByArgs {
    where?: UserAuthWhereInput;
    orderBy?: Array<UserAuthOrderByWithAggregationInput>;
    by: Array<keyof typeof UserAuthScalarFieldEnum>;
    having?: UserAuthScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserAuthCountAggregateInput;
    _avg?: UserAuthAvgAggregateInput;
    _sum?: UserAuthSumAggregateInput;
    _min?: UserAuthMinAggregateInput;
    _max?: UserAuthMaxAggregateInput;
}
