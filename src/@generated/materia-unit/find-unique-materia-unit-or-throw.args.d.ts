import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
export declare class FindUniqueMateriaUnitOrThrowArgs {
    where: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
}
