import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class RecipeScalarWhereInput {
    AND?: Array<RecipeScalarWhereInput>;
    OR?: Array<RecipeScalarWhereInput>;
    NOT?: Array<RecipeScalarWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    stars?: IntFilter;
    authorId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
