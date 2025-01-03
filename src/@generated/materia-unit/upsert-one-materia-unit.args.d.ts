import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { MateriaUnitCreateInput } from './materia-unit-create.input';
import { MateriaUnitUpdateInput } from './materia-unit-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneMateriaUnitArgs {
    where: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
    create: MateriaUnitCreateInput;
    update: MateriaUnitUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
