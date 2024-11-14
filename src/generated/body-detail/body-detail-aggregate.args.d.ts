import { BodyDetailWhereInput } from './body-detail-where.input';
import { BodyDetailOrderByWithRelationInput } from './body-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { BodyDetailCountAggregateInput } from './body-detail-count-aggregate.input';
import { BodyDetailAvgAggregateInput } from './body-detail-avg-aggregate.input';
import { BodyDetailSumAggregateInput } from './body-detail-sum-aggregate.input';
import { BodyDetailMinAggregateInput } from './body-detail-min-aggregate.input';
import { BodyDetailMaxAggregateInput } from './body-detail-max-aggregate.input';
export declare class BodyDetailAggregateArgs {
    where?: BodyDetailWhereInput;
    orderBy?: Array<BodyDetailOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    _count?: BodyDetailCountAggregateInput;
    _avg?: BodyDetailAvgAggregateInput;
    _sum?: BodyDetailSumAggregateInput;
    _min?: BodyDetailMinAggregateInput;
    _max?: BodyDetailMaxAggregateInput;
}
