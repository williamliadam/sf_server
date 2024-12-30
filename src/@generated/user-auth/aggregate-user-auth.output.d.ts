import { UserAuthCountAggregate } from './user-auth-count-aggregate.output';
import { UserAuthAvgAggregate } from './user-auth-avg-aggregate.output';
import { UserAuthSumAggregate } from './user-auth-sum-aggregate.output';
import { UserAuthMinAggregate } from './user-auth-min-aggregate.output';
import { UserAuthMaxAggregate } from './user-auth-max-aggregate.output';
export declare class AggregateUserAuth {
    _count?: UserAuthCountAggregate;
    _avg?: UserAuthAvgAggregate;
    _sum?: UserAuthSumAggregate;
    _min?: UserAuthMinAggregate;
    _max?: UserAuthMaxAggregate;
}
