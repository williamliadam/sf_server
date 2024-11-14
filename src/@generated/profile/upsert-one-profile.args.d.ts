import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileCreateInput } from './profile-create.input';
import { ProfileUpdateInput } from './profile-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneProfileArgs {
    where: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    create: ProfileCreateInput;
    update: ProfileUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
