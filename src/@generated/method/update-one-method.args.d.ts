import { MethodUpdateInput } from './method-update.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
export declare class UpdateOneMethodArgs {
    data: MethodUpdateInput;
    where: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
}
