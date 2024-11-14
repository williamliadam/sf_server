import { MateriaCategoryCountAggregate } from './materia-category-count-aggregate.output';
import { MateriaCategoryAvgAggregate } from './materia-category-avg-aggregate.output';
import { MateriaCategorySumAggregate } from './materia-category-sum-aggregate.output';
import { MateriaCategoryMinAggregate } from './materia-category-min-aggregate.output';
import { MateriaCategoryMaxAggregate } from './materia-category-max-aggregate.output';
export declare class AggregateMateriaCategory {
    _count?: MateriaCategoryCountAggregate;
    _avg?: MateriaCategoryAvgAggregate;
    _sum?: MateriaCategorySumAggregate;
    _min?: MateriaCategoryMinAggregate;
    _max?: MateriaCategoryMaxAggregate;
}
