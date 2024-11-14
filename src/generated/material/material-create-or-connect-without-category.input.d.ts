import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialCreateWithoutCategoryInput } from './material-create-without-category.input';
export declare class MaterialCreateOrConnectWithoutCategoryInput {
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    create: MaterialCreateWithoutCategoryInput;
}
