import { MethodUpdateInput } from './method-update.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneMethodArgs {
    data: MethodUpdateInput;
    where: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
