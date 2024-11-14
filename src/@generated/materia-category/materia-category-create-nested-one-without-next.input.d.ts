import { MateriaCategoryCreateWithoutNextInput } from './materia-category-create-without-next.input';
import { MateriaCategoryCreateOrConnectWithoutNextInput } from './materia-category-create-or-connect-without-next.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
export declare class MateriaCategoryCreateNestedOneWithoutNextInput {
    create?: MateriaCategoryCreateWithoutNextInput;
    connectOrCreate?: MateriaCategoryCreateOrConnectWithoutNextInput;
    connect?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
}
