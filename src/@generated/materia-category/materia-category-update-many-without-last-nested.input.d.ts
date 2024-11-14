import { MateriaCategoryCreateWithoutLastInput } from './materia-category-create-without-last.input';
import { MateriaCategoryCreateOrConnectWithoutLastInput } from './materia-category-create-or-connect-without-last.input';
import { MateriaCategoryUpsertWithWhereUniqueWithoutLastInput } from './materia-category-upsert-with-where-unique-without-last.input';
import { MateriaCategoryCreateManyLastInputEnvelope } from './materia-category-create-many-last-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryUpdateWithWhereUniqueWithoutLastInput } from './materia-category-update-with-where-unique-without-last.input';
import { MateriaCategoryUpdateManyWithWhereWithoutLastInput } from './materia-category-update-many-with-where-without-last.input';
import { MateriaCategoryScalarWhereInput } from './materia-category-scalar-where.input';
export declare class MateriaCategoryUpdateManyWithoutLastNestedInput {
    create?: Array<MateriaCategoryCreateWithoutLastInput>;
    connectOrCreate?: Array<MateriaCategoryCreateOrConnectWithoutLastInput>;
    upsert?: Array<MateriaCategoryUpsertWithWhereUniqueWithoutLastInput>;
    createMany?: MateriaCategoryCreateManyLastInputEnvelope;
    set?: Array<Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>>;
    disconnect?: Array<Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>>;
    delete?: Array<Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>>;
    connect?: Array<Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>>;
    update?: Array<MateriaCategoryUpdateWithWhereUniqueWithoutLastInput>;
    updateMany?: Array<MateriaCategoryUpdateManyWithWhereWithoutLastInput>;
    deleteMany?: Array<MateriaCategoryScalarWhereInput>;
}
