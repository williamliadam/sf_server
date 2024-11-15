import { MateriaUnitCountAggregate } from './materia-unit-count-aggregate.output';
import { MateriaUnitAvgAggregate } from './materia-unit-avg-aggregate.output';
import { MateriaUnitSumAggregate } from './materia-unit-sum-aggregate.output';
import { MateriaUnitMinAggregate } from './materia-unit-min-aggregate.output';
import { MateriaUnitMaxAggregate } from './materia-unit-max-aggregate.output';
export declare class MateriaUnitGroupBy {
    id: number;
    code: string;
    name: string;
    toKilo: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: MateriaUnitCountAggregate;
    _avg?: MateriaUnitAvgAggregate;
    _sum?: MateriaUnitSumAggregate;
    _min?: MateriaUnitMinAggregate;
    _max?: MateriaUnitMaxAggregate;
}