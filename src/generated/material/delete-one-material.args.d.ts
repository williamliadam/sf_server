import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
export declare class DeleteOneMaterialArgs {
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
}
