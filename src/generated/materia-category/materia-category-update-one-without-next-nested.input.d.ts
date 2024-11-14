import { MateriaCategoryCreateWithoutNextInput } from './materia-category-create-without-next.input';
import { MateriaCategoryCreateOrConnectWithoutNextInput } from './materia-category-create-or-connect-without-next.input';
import { MateriaCategoryUpsertWithoutNextInput } from './materia-category-upsert-without-next.input';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryUpdateToOneWithWhereWithoutNextInput } from './materia-category-update-to-one-with-where-without-next.input';
export declare class MateriaCategoryUpdateOneWithoutNextNestedInput {
    create?: MateriaCategoryCreateWithoutNextInput;
    connectOrCreate?: MateriaCategoryCreateOrConnectWithoutNextInput;
    upsert?: MateriaCategoryUpsertWithoutNextInput;
    disconnect?: MateriaCategoryWhereInput;
    delete?: MateriaCategoryWhereInput;
    connect?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
    update?: MateriaCategoryUpdateToOneWithWhereWithoutNextInput;
}
