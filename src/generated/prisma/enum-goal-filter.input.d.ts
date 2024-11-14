import { Goal } from './goal.enum';
import { NestedEnumGoalFilter } from './nested-enum-goal-filter.input';
export declare class EnumGoalFilter {
    equals?: keyof typeof Goal;
    in?: Array<keyof typeof Goal>;
    notIn?: Array<keyof typeof Goal>;
    not?: NestedEnumGoalFilter;
}
