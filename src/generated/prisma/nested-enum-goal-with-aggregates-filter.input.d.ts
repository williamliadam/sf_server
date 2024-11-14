import { Goal } from './goal.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGoalFilter } from './nested-enum-goal-filter.input';
export declare class NestedEnumGoalWithAggregatesFilter {
    equals?: keyof typeof Goal;
    in?: Array<keyof typeof Goal>;
    notIn?: Array<keyof typeof Goal>;
    not?: NestedEnumGoalWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumGoalFilter;
    _max?: NestedEnumGoalFilter;
}
