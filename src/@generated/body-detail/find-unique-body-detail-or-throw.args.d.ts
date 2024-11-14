import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueBodyDetailOrThrowArgs {
    where: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
