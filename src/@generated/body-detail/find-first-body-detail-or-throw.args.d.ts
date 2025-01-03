import { BodyDetailWhereInput } from './body-detail-where.input';
import { BodyDetailOrderByWithRelationInput } from './body-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { BodyDetailScalarFieldEnum } from './body-detail-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstBodyDetailOrThrowArgs {
    where?: BodyDetailWhereInput;
    orderBy?: Array<BodyDetailOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BodyDetailScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
