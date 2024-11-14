import { MealType } from './meal-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMealTypeFilter } from './nested-enum-meal-type-filter.input';
export declare class NestedEnumMealTypeWithAggregatesFilter {
    equals?: keyof typeof MealType;
    in?: Array<keyof typeof MealType>;
    notIn?: Array<keyof typeof MealType>;
    not?: NestedEnumMealTypeWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumMealTypeFilter;
    _max?: NestedEnumMealTypeFilter;
}
