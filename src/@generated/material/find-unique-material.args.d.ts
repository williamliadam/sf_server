import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueMaterialArgs {
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
