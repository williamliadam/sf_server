import { MateriaCategoryCreateWithoutMaterialsInput } from './materia-category-create-without-materials.input';
import { MateriaCategoryCreateOrConnectWithoutMaterialsInput } from './materia-category-create-or-connect-without-materials.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
export declare class MateriaCategoryCreateNestedOneWithoutMaterialsInput {
    create?: MateriaCategoryCreateWithoutMaterialsInput;
    connectOrCreate?: MateriaCategoryCreateOrConnectWithoutMaterialsInput;
    connect?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
}
