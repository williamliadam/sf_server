import { ProfileUpdateInput } from './profile-update.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneProfileArgs {
    data: ProfileUpdateInput;
    where: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
