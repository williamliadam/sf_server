import { PostWhereInput } from './post-where.input';
import { PostOrderByWithRelationInput } from './post-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostScalarFieldEnum } from './post-scalar-field.enum';
export declare class FindManyPostArgs {
    where?: PostWhereInput;
    orderBy?: Array<PostOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}
