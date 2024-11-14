import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { MateriaUnitOrderByWithAggregationInput } from './materia-unit-order-by-with-aggregation.input';
import { MateriaUnitScalarFieldEnum } from './materia-unit-scalar-field.enum';
import { MateriaUnitScalarWhereWithAggregatesInput } from './materia-unit-scalar-where-with-aggregates.input';
import { MateriaUnitCountAggregateInput } from './materia-unit-count-aggregate.input';
import { MateriaUnitAvgAggregateInput } from './materia-unit-avg-aggregate.input';
import { MateriaUnitSumAggregateInput } from './materia-unit-sum-aggregate.input';
import { MateriaUnitMinAggregateInput } from './materia-unit-min-aggregate.input';
import { MateriaUnitMaxAggregateInput } from './materia-unit-max-aggregate.input';
export declare class MateriaUnitGroupByArgs {
    where?: MateriaUnitWhereInput;
    orderBy?: Array<MateriaUnitOrderByWithAggregationInput>;
    by: Array<keyof typeof MateriaUnitScalarFieldEnum>;
    having?: MateriaUnitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MateriaUnitCountAggregateInput;
    _avg?: MateriaUnitAvgAggregateInput;
    _sum?: MateriaUnitSumAggregateInput;
    _min?: MateriaUnitMinAggregateInput;
    _max?: MateriaUnitMaxAggregateInput;
}
