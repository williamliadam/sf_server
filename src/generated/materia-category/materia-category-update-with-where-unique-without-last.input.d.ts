import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryUpdateWithoutLastInput } from './materia-category-update-without-last.input';
export declare class MateriaCategoryUpdateWithWhereUniqueWithoutLastInput {
    where: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    data: MateriaCategoryUpdateWithoutLastInput;
}
