import { MethodWhereInput } from './method-where.input';
import { MethodOrderByWithRelationInput } from './method-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { MethodCountAggregateInput } from './method-count-aggregate.input';
import { MethodAvgAggregateInput } from './method-avg-aggregate.input';
import { MethodSumAggregateInput } from './method-sum-aggregate.input';
import { MethodMinAggregateInput } from './method-min-aggregate.input';
import { MethodMaxAggregateInput } from './method-max-aggregate.input';
export declare class MethodAggregateArgs {
    where?: MethodWhereInput;
    orderBy?: Array<MethodOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    _count?: MethodCountAggregateInput;
    _avg?: MethodAvgAggregateInput;
    _sum?: MethodSumAggregateInput;
    _min?: MethodMinAggregateInput;
    _max?: MethodMaxAggregateInput;
}
