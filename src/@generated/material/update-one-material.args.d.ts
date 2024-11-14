import { MaterialUpdateInput } from './material-update.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneMaterialArgs {
    data: MaterialUpdateInput;
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
