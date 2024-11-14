import { MealType } from './meal-type.enum';
import { NestedEnumMealTypeFilter } from './nested-enum-meal-type-filter.input';
export declare class EnumMealTypeFilter {
    equals?: keyof typeof MealType;
    in?: Array<keyof typeof MealType>;
    notIn?: Array<keyof typeof MealType>;
    not?: NestedEnumMealTypeFilter;
}
