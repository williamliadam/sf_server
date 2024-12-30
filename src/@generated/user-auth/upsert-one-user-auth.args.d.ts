import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
import { UserAuthCreateInput } from './user-auth-create.input';
import { UserAuthUpdateInput } from './user-auth-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneUserAuthArgs {
    where: Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>;
    create: UserAuthCreateInput;
    update: UserAuthUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
