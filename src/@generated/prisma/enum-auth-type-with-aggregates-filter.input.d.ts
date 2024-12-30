import { AuthType } from './auth-type.enum';
import { NestedEnumAuthTypeWithAggregatesFilter } from './nested-enum-auth-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAuthTypeFilter } from './nested-enum-auth-type-filter.input';
export declare class EnumAuthTypeWithAggregatesFilter {
    equals?: keyof typeof AuthType;
    in?: Array<keyof typeof AuthType>;
    notIn?: Array<keyof typeof AuthType>;
    not?: NestedEnumAuthTypeWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumAuthTypeFilter;
    _max?: NestedEnumAuthTypeFilter;
}
