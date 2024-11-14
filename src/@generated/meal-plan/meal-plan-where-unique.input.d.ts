import { MealPlanWhereInput } from './meal-plan-where.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumMealTypeFilter } from '../prisma/enum-meal-type-filter.input';
import { DishPlanListRelationFilter } from '../dish-plan/dish-plan-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class MealPlanWhereUniqueInput {
    id?: number;
    AND?: Array<MealPlanWhereInput>;
    OR?: Array<MealPlanWhereInput>;
    NOT?: Array<MealPlanWhereInput>;
    planTime?: DateTimeNullableFilter;
    userId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    type?: EnumMealTypeFilter;
    dishPlans?: DishPlanListRelationFilter;
    createBy?: UserRelationFilter;
}
