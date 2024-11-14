import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { MateriaCategoryOrderByWithAggregationInput } from './materia-category-order-by-with-aggregation.input';
import { MateriaCategoryScalarFieldEnum } from './materia-category-scalar-field.enum';
import { MateriaCategoryScalarWhereWithAggregatesInput } from './materia-category-scalar-where-with-aggregates.input';
import { MateriaCategoryCountAggregateInput } from './materia-category-count-aggregate.input';
import { MateriaCategoryAvgAggregateInput } from './materia-category-avg-aggregate.input';
import { MateriaCategorySumAggregateInput } from './materia-category-sum-aggregate.input';
import { MateriaCategoryMinAggregateInput } from './materia-category-min-aggregate.input';
import { MateriaCategoryMaxAggregateInput } from './materia-category-max-aggregate.input';
export declare class MateriaCategoryGroupByArgs {
    where?: MateriaCategoryWhereInput;
    orderBy?: Array<MateriaCategoryOrderByWithAggregationInput>;
    by: Array<keyof typeof MateriaCategoryScalarFieldEnum>;
    having?: MateriaCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MateriaCategoryCountAggregateInput;
    _avg?: MateriaCategoryAvgAggregateInput;
    _sum?: MateriaCategorySumAggregateInput;
    _min?: MateriaCategoryMinAggregateInput;
    _max?: MateriaCategoryMaxAggregateInput;
}
