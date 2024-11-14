import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryCreateWithoutLastInput } from './materia-category-create-without-last.input';
export declare class MateriaCategoryCreateOrConnectWithoutLastInput {
    where: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    create: MateriaCategoryCreateWithoutLastInput;
}
