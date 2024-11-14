import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialCreateInput } from './material-create.input';
import { MaterialUpdateInput } from './material-update.input';
export declare class UpsertOneMaterialArgs {
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    create: MaterialCreateInput;
    update: MaterialUpdateInput;
}
