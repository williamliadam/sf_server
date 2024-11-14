import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
