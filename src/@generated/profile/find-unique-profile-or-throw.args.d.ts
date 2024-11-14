import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueProfileOrThrowArgs {
    where: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
