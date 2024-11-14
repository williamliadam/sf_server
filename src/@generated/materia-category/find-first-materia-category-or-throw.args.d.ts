import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { MateriaCategoryOrderByWithRelationInput } from './materia-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryScalarFieldEnum } from './materia-category-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstMateriaCategoryOrThrowArgs {
    where?: MateriaCategoryWhereInput;
    orderBy?: Array<MateriaCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MateriaCategoryScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
