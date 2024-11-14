import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { MateriaUnitCreateWithoutIngredientsInput } from './materia-unit-create-without-ingredients.input';
export declare class MateriaUnitCreateOrConnectWithoutIngredientsInput {
    where: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
    create: MateriaUnitCreateWithoutIngredientsInput;
}
