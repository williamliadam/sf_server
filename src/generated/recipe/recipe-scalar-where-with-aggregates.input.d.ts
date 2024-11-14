import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class RecipeScalarWhereWithAggregatesInput {
    AND?: Array<RecipeScalarWhereWithAggregatesInput>;
    OR?: Array<RecipeScalarWhereWithAggregatesInput>;
    NOT?: Array<RecipeScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    stars?: IntWithAggregatesFilter;
    authorId?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
