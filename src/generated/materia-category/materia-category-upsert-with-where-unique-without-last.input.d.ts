import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryUpdateWithoutLastInput } from './materia-category-update-without-last.input';
import { MateriaCategoryCreateWithoutLastInput } from './materia-category-create-without-last.input';
export declare class MateriaCategoryUpsertWithWhereUniqueWithoutLastInput {
    where: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    update: MateriaCategoryUpdateWithoutLastInput;
    create: MateriaCategoryCreateWithoutLastInput;
}
