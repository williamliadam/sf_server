import { AuthType } from './auth-type.enum';
export declare class NestedEnumAuthTypeFilter {
    equals?: keyof typeof AuthType;
    in?: Array<keyof typeof AuthType>;
    notIn?: Array<keyof typeof AuthType>;
    not?: NestedEnumAuthTypeFilter;
}
