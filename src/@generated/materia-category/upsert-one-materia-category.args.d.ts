import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryCreateInput } from './materia-category-create.input';
import { MateriaCategoryUpdateInput } from './materia-category-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneMateriaCategoryArgs {
    where: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    create: MateriaCategoryCreateInput;
    update: MateriaCategoryUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
