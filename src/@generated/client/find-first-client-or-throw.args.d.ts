import { ClientWhereInput } from './client-where.input';
import { ClientOrderByWithRelationInput } from './client-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientScalarFieldEnum } from './client-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstClientOrThrowArgs {
    where?: ClientWhereInput;
    orderBy?: Array<ClientOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClientScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
