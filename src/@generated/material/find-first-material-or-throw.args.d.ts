import { MaterialWhereInput } from './material-where.input';
import { MaterialOrderByWithRelationInput } from './material-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialScalarFieldEnum } from './material-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstMaterialOrThrowArgs {
    where?: MaterialWhereInput;
    orderBy?: Array<MaterialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MaterialScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
