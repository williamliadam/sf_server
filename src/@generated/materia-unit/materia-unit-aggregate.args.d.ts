import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { MateriaUnitOrderByWithRelationInput } from './materia-unit-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { MateriaUnitCountAggregateInput } from './materia-unit-count-aggregate.input';
import { MateriaUnitAvgAggregateInput } from './materia-unit-avg-aggregate.input';
import { MateriaUnitSumAggregateInput } from './materia-unit-sum-aggregate.input';
import { MateriaUnitMinAggregateInput } from './materia-unit-min-aggregate.input';
import { MateriaUnitMaxAggregateInput } from './materia-unit-max-aggregate.input';
export declare class MateriaUnitAggregateArgs {
    where?: MateriaUnitWhereInput;
    orderBy?: Array<MateriaUnitOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    _count?: MateriaUnitCountAggregateInput;
    _avg?: MateriaUnitAvgAggregateInput;
    _sum?: MateriaUnitSumAggregateInput;
    _min?: MateriaUnitMinAggregateInput;
    _max?: MateriaUnitMaxAggregateInput;
}
