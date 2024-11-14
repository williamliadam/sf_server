import { MaterialCreateWithoutCategoryInput } from './material-create-without-category.input';
import { MaterialCreateOrConnectWithoutCategoryInput } from './material-create-or-connect-without-category.input';
import { MaterialCreateManyCategoryInputEnvelope } from './material-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
export declare class MaterialCreateNestedManyWithoutCategoryInput {
    create?: Array<MaterialCreateWithoutCategoryInput>;
    connectOrCreate?: Array<MaterialCreateOrConnectWithoutCategoryInput>;
    createMany?: MaterialCreateManyCategoryInputEnvelope;
    connect?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;
}
