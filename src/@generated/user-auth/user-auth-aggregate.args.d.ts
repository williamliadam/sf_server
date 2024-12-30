import { UserAuthWhereInput } from './user-auth-where.input';
import { UserAuthOrderByWithRelationInput } from './user-auth-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
import { UserAuthCountAggregateInput } from './user-auth-count-aggregate.input';
import { UserAuthAvgAggregateInput } from './user-auth-avg-aggregate.input';
import { UserAuthSumAggregateInput } from './user-auth-sum-aggregate.input';
import { UserAuthMinAggregateInput } from './user-auth-min-aggregate.input';
import { UserAuthMaxAggregateInput } from './user-auth-max-aggregate.input';
export declare class UserAuthAggregateArgs {
    where?: UserAuthWhereInput;
    orderBy?: Array<UserAuthOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>;
    take?: number;
    skip?: number;
    _count?: UserAuthCountAggregateInput;
    _avg?: UserAuthAvgAggregateInput;
    _sum?: UserAuthSumAggregateInput;
    _min?: UserAuthMinAggregateInput;
    _max?: UserAuthMaxAggregateInput;
}
