import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { MethodCreateInput } from './method-create.input';
import { MethodUpdateInput } from './method-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneMethodArgs {
    where: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
    create: MethodCreateInput;
    update: MethodUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
