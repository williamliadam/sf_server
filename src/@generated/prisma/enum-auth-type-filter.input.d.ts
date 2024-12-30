import { AuthType } from './auth-type.enum';
import { NestedEnumAuthTypeFilter } from './nested-enum-auth-type-filter.input';
export declare class EnumAuthTypeFilter {
    equals?: keyof typeof AuthType;
    in?: Array<keyof typeof AuthType>;
    notIn?: Array<keyof typeof AuthType>;
    not?: NestedEnumAuthTypeFilter;
}
