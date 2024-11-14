import { MateriaUnitCreateWithoutIngredientsInput } from './materia-unit-create-without-ingredients.input';
import { MateriaUnitCreateOrConnectWithoutIngredientsInput } from './materia-unit-create-or-connect-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
export declare class MateriaUnitCreateNestedOneWithoutIngredientsInput {
    create?: MateriaUnitCreateWithoutIngredientsInput;
    connectOrCreate?: MateriaUnitCreateOrConnectWithoutIngredientsInput;
    connect?: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
}
