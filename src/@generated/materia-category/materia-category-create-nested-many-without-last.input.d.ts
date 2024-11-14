import { MateriaCategoryCreateWithoutLastInput } from './materia-category-create-without-last.input';
import { MateriaCategoryCreateOrConnectWithoutLastInput } from './materia-category-create-or-connect-without-last.input';
import { MateriaCategoryCreateManyLastInputEnvelope } from './materia-category-create-many-last-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
export declare class MateriaCategoryCreateNestedManyWithoutLastInput {
    create?: Array<MateriaCategoryCreateWithoutLastInput>;
    connectOrCreate?: Array<MateriaCategoryCreateOrConnectWithoutLastInput>;
    createMany?: MateriaCategoryCreateManyLastInputEnvelope;
    connect?: Array<Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>>;
}
