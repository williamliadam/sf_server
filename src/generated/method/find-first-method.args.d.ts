import { MethodWhereInput } from './method-where.input';
import { MethodOrderByWithRelationInput } from './method-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { MethodScalarFieldEnum } from './method-scalar-field.enum';
export declare class FindFirstMethodArgs {
    where?: MethodWhereInput;
    orderBy?: Array<MethodOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MethodScalarFieldEnum>;
}
