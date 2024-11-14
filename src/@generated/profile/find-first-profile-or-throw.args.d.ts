import { ProfileWhereInput } from './profile-where.input';
import { ProfileOrderByWithRelationInput } from './profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstProfileOrThrowArgs {
    where?: ProfileWhereInput;
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
