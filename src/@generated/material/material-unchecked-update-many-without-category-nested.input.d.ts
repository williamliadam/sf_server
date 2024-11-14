import { MaterialCreateWithoutCategoryInput } from './material-create-without-category.input';
import { MaterialCreateOrConnectWithoutCategoryInput } from './material-create-or-connect-without-category.input';
import { MaterialUpsertWithWhereUniqueWithoutCategoryInput } from './material-upsert-with-where-unique-without-category.input';
import { MaterialCreateManyCategoryInputEnvelope } from './material-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateWithWhereUniqueWithoutCategoryInput } from './material-update-with-where-unique-without-category.input';
import { MaterialUpdateManyWithWhereWithoutCategoryInput } from './material-update-many-with-where-without-category.input';
import { MaterialScalarWhereInput } from './material-scalar-where.input';
export declare class MaterialUncheckedUpdateManyWithoutCategoryNestedInput {
    create?: Array<MaterialCreateWithoutCategoryInput>;
    connectOrCreate?: Array<MaterialCreateOrConnectWithoutCategoryInput>;
    upsert?: Array<MaterialUpsertWithWhereUniqueWithoutCategoryInput>;
    createMany?: MaterialCreateManyCategoryInputEnvelope;
    set?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;
    disconnect?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;
    delete?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;
    connect?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;
    update?: Array<MaterialUpdateWithWhereUniqueWithoutCategoryInput>;
    updateMany?: Array<MaterialUpdateManyWithWhereWithoutCategoryInput>;
    deleteMany?: Array<MaterialScalarWhereInput>;
}
