import { Goal } from './goal.enum';
import { NestedEnumGoalWithAggregatesFilter } from './nested-enum-goal-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGoalFilter } from './nested-enum-goal-filter.input';
export declare class EnumGoalWithAggregatesFilter {
    equals?: keyof typeof Goal;
    in?: Array<keyof typeof Goal>;
    notIn?: Array<keyof typeof Goal>;
    not?: NestedEnumGoalWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumGoalFilter;
    _max?: NestedEnumGoalFilter;
}
