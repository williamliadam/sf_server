import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryCreateWithoutMaterialsInput } from './materia-category-create-without-materials.input';
export declare class MateriaCategoryCreateOrConnectWithoutMaterialsInput {
    where: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    create: MateriaCategoryCreateWithoutMaterialsInput;
}
