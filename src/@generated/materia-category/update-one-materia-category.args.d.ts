import { MateriaCategoryUpdateInput } from './materia-category-update.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneMateriaCategoryArgs {
    data: MateriaCategoryUpdateInput;
    where: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
