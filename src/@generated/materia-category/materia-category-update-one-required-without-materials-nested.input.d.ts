import { MateriaCategoryCreateWithoutMaterialsInput } from './materia-category-create-without-materials.input';
import { MateriaCategoryCreateOrConnectWithoutMaterialsInput } from './materia-category-create-or-connect-without-materials.input';
import { MateriaCategoryUpsertWithoutMaterialsInput } from './materia-category-upsert-without-materials.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput } from './materia-category-update-to-one-with-where-without-materials.input';
export declare class MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput {
    create?: MateriaCategoryCreateWithoutMaterialsInput;
    connectOrCreate?: MateriaCategoryCreateOrConnectWithoutMaterialsInput;
    upsert?: MateriaCategoryUpsertWithoutMaterialsInput;
    connect?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    update?: MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput;
}
