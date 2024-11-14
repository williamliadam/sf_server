import { MaterialWhereInput } from './material-where.input';
import { MaterialOrderByWithRelationInput } from './material-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialCountAggregateInput } from './material-count-aggregate.input';
import { MaterialAvgAggregateInput } from './material-avg-aggregate.input';
import { MaterialSumAggregateInput } from './material-sum-aggregate.input';
import { MaterialMinAggregateInput } from './material-min-aggregate.input';
import { MaterialMaxAggregateInput } from './material-max-aggregate.input';
export declare class MaterialAggregateArgs {
    where?: MaterialWhereInput;
    orderBy?: Array<MaterialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    _count?: MaterialCountAggregateInput;
    _avg?: MaterialAvgAggregateInput;
    _sum?: MaterialSumAggregateInput;
    _min?: MaterialMinAggregateInput;
    _max?: MaterialMaxAggregateInput;
}
