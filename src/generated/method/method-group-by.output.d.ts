import { MethodCountAggregate } from './method-count-aggregate.output';
import { MethodAvgAggregate } from './method-avg-aggregate.output';
import { MethodSumAggregate } from './method-sum-aggregate.output';
import { MethodMinAggregate } from './method-min-aggregate.output';
import { MethodMaxAggregate } from './method-max-aggregate.output';
export declare class MethodGroupBy {
    id: number;
    code: string;
    name: string;
    desc: string;
    recipeId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: MethodCountAggregate;
    _avg?: MethodAvgAggregate;
    _sum?: MethodSumAggregate;
    _min?: MethodMinAggregate;
    _max?: MethodMaxAggregate;
}
