import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueClientArgs {
    where: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
