import { MaterialCountAggregate } from './material-count-aggregate.output';
import { MaterialAvgAggregate } from './material-avg-aggregate.output';
import { MaterialSumAggregate } from './material-sum-aggregate.output';
import { MaterialMinAggregate } from './material-min-aggregate.output';
import { MaterialMaxAggregate } from './material-max-aggregate.output';
export declare class AggregateMaterial {
    _count?: MaterialCountAggregate;
    _avg?: MaterialAvgAggregate;
    _sum?: MaterialSumAggregate;
    _min?: MaterialMinAggregate;
    _max?: MaterialMaxAggregate;
}
