import { ClientCountAggregate } from './client-count-aggregate.output';
import { ClientAvgAggregate } from './client-avg-aggregate.output';
import { ClientSumAggregate } from './client-sum-aggregate.output';
import { ClientMinAggregate } from './client-min-aggregate.output';
import { ClientMaxAggregate } from './client-max-aggregate.output';
export declare class AggregateClient {
    _count?: ClientCountAggregate;
    _avg?: ClientAvgAggregate;
    _sum?: ClientSumAggregate;
    _min?: ClientMinAggregate;
    _max?: ClientMaxAggregate;
}
