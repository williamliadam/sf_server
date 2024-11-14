import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class IngredientScalarWhereWithAggregatesInput {
    AND?: Array<IngredientScalarWhereWithAggregatesInput>;
    OR?: Array<IngredientScalarWhereWithAggregatesInput>;
    NOT?: Array<IngredientScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    materialId?: IntWithAggregatesFilter;
    amount?: IntWithAggregatesFilter;
    materiaUnitId?: IntWithAggregatesFilter;
    recipeId?: IntNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
