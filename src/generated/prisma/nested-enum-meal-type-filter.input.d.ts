import { MealType } from './meal-type.enum';
export declare class NestedEnumMealTypeFilter {
    equals?: keyof typeof MealType;
    in?: Array<keyof typeof MealType>;
    notIn?: Array<keyof typeof MealType>;
    not?: NestedEnumMealTypeFilter;
}
