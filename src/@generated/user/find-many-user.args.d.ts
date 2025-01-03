import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindManyUserArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
