import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
export declare class DishTemplateScalarWhereInput {
    AND?: Array<DishTemplateScalarWhereInput>;
    OR?: Array<DishTemplateScalarWhereInput>;
    NOT?: Array<DishTemplateScalarWhereInput>;
    id?: IntFilter;
    recipeId?: IntFilter;
    amount?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    mealTemplateId?: IntNullableFilter;
}
