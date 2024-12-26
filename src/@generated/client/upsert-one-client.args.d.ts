import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientCreateInput } from './client-create.input';
import { ClientUpdateInput } from './client-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneClientArgs {
    where: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;
    create: ClientCreateInput;
    update: ClientUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
