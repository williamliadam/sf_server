import { ClientWhereInput } from './client-where.input';
import { ClientOrderByWithRelationInput } from './client-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientCountAggregateInput } from './client-count-aggregate.input';
import { ClientAvgAggregateInput } from './client-avg-aggregate.input';
import { ClientSumAggregateInput } from './client-sum-aggregate.input';
import { ClientMinAggregateInput } from './client-min-aggregate.input';
import { ClientMaxAggregateInput } from './client-max-aggregate.input';
export declare class ClientAggregateArgs {
    where?: ClientWhereInput;
    orderBy?: Array<ClientOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInput;
    _avg?: ClientAvgAggregateInput;
    _sum?: ClientSumAggregateInput;
    _min?: ClientMinAggregateInput;
    _max?: ClientMaxAggregateInput;
}
