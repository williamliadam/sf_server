import { Goal } from './goal.enum';
export declare class NestedEnumGoalFilter {
    equals?: keyof typeof Goal;
    in?: Array<keyof typeof Goal>;
    notIn?: Array<keyof typeof Goal>;
    not?: NestedEnumGoalFilter;
}
