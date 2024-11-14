import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryCreateWithoutNextInput } from './materia-category-create-without-next.input';
export declare class MateriaCategoryCreateOrConnectWithoutNextInput {
    where: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    create: MateriaCategoryCreateWithoutNextInput;
}
