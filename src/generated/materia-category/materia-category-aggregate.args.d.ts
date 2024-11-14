import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { MateriaCategoryOrderByWithRelationInput } from './materia-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryCountAggregateInput } from './materia-category-count-aggregate.input';
import { MateriaCategoryAvgAggregateInput } from './materia-category-avg-aggregate.input';
import { MateriaCategorySumAggregateInput } from './materia-category-sum-aggregate.input';
import { MateriaCategoryMinAggregateInput } from './materia-category-min-aggregate.input';
import { MateriaCategoryMaxAggregateInput } from './materia-category-max-aggregate.input';
export declare class MateriaCategoryAggregateArgs {
    where?: MateriaCategoryWhereInput;
    orderBy?: Array<MateriaCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    _count?: MateriaCategoryCountAggregateInput;
    _avg?: MateriaCategoryAvgAggregateInput;
    _sum?: MateriaCategorySumAggregateInput;
    _min?: MateriaCategoryMinAggregateInput;
    _max?: MateriaCategoryMaxAggregateInput;
}
