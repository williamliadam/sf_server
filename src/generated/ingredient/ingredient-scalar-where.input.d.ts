import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class IngredientScalarWhereInput {
    AND?: Array<IngredientScalarWhereInput>;
    OR?: Array<IngredientScalarWhereInput>;
    NOT?: Array<IngredientScalarWhereInput>;
    id?: IntFilter;
    materialId?: IntFilter;
    amount?: IntFilter;
    materiaUnitId?: IntFilter;
    recipeId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
