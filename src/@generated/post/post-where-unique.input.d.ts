import { PostWhereInput } from './post-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
export declare class PostWhereUniqueInput {
    id?: number;
    AND?: Array<PostWhereInput>;
    OR?: Array<PostWhereInput>;
    NOT?: Array<PostWhereInput>;
    title?: StringFilter;
    content?: StringNullableFilter;
    stars?: IntNullableFilter;
    follows?: IntNullableFilter;
    published?: BoolNullableFilter;
    authorId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    author?: UserNullableRelationFilter;
}
