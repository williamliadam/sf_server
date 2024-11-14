import { MaterialWhereInput } from './material-where.input';
import { MaterialOrderByWithRelationInput } from './material-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialScalarFieldEnum } from './material-scalar-field.enum';
export declare class FindFirstMaterialArgs {
    where?: MaterialWhereInput;
    orderBy?: Array<MaterialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MaterialScalarFieldEnum>;
}
