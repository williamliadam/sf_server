import { UserAuthWhereInput } from './user-auth-where.input';
import { UserAuthOrderByWithRelationInput } from './user-auth-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
import { UserAuthScalarFieldEnum } from './user-auth-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstUserAuthOrThrowArgs {
    where?: UserAuthWhereInput;
    orderBy?: Array<UserAuthOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserAuthScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
