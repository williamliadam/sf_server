import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class DeleteOneUserAuthArgs {
    where: Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
