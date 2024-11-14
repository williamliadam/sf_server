import { BodyDetailUpdateInput } from './body-detail-update.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneBodyDetailArgs {
    data: BodyDetailUpdateInput;
    where: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
