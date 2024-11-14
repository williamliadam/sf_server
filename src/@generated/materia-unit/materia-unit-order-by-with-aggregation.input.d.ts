import { SortOrder } from '../prisma/sort-order.enum';
import { MateriaUnitCountOrderByAggregateInput } from './materia-unit-count-order-by-aggregate.input';
import { MateriaUnitAvgOrderByAggregateInput } from './materia-unit-avg-order-by-aggregate.input';
import { MateriaUnitMaxOrderByAggregateInput } from './materia-unit-max-order-by-aggregate.input';
import { MateriaUnitMinOrderByAggregateInput } from './materia-unit-min-order-by-aggregate.input';
import { MateriaUnitSumOrderByAggregateInput } from './materia-unit-sum-order-by-aggregate.input';
export declare class MateriaUnitOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    toKilo?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: MateriaUnitCountOrderByAggregateInput;
    _avg?: MateriaUnitAvgOrderByAggregateInput;
    _max?: MateriaUnitMaxOrderByAggregateInput;
    _min?: MateriaUnitMinOrderByAggregateInput;
    _sum?: MateriaUnitSumOrderByAggregateInput;
}
