import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class DishPlanScalarWhereInput {
    AND?: Array<DishPlanScalarWhereInput>;
    OR?: Array<DishPlanScalarWhereInput>;
    NOT?: Array<DishPlanScalarWhereInput>;
    id?: IntFilter;
    recipeId?: IntFilter;
    amount?: IntFilter;
    planCookerId?: IntFilter;
    mealPlanId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
