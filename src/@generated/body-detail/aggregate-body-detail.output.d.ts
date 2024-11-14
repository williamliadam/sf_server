import { BodyDetailCountAggregate } from './body-detail-count-aggregate.output';
import { BodyDetailAvgAggregate } from './body-detail-avg-aggregate.output';
import { BodyDetailSumAggregate } from './body-detail-sum-aggregate.output';
import { BodyDetailMinAggregate } from './body-detail-min-aggregate.output';
import { BodyDetailMaxAggregate } from './body-detail-max-aggregate.output';
export declare class AggregateBodyDetail {
    _count?: BodyDetailCountAggregate;
    _avg?: BodyDetailAvgAggregate;
    _sum?: BodyDetailSumAggregate;
    _min?: BodyDetailMinAggregate;
    _max?: BodyDetailMaxAggregate;
}
