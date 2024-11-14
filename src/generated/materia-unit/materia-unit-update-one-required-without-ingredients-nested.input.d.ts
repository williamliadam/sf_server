import { MateriaUnitCreateWithoutIngredientsInput } from './materia-unit-create-without-ingredients.input';
import { MateriaUnitCreateOrConnectWithoutIngredientsInput } from './materia-unit-create-or-connect-without-ingredients.input';
import { MateriaUnitUpsertWithoutIngredientsInput } from './materia-unit-upsert-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput } from './materia-unit-update-to-one-with-where-without-ingredients.input';
export declare class MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput {
    create?: MateriaUnitCreateWithoutIngredientsInput;
    connectOrCreate?: MateriaUnitCreateOrConnectWithoutIngredientsInput;
    upsert?: MateriaUnitUpsertWithoutIngredientsInput;
    connect?: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
    update?: MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput;
}
