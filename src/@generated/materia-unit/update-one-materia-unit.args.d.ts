import { MateriaUnitUpdateInput } from './materia-unit-update.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneMateriaUnitArgs {
    data: MateriaUnitUpdateInput;
    where: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
