import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateWithoutCategoryInput } from './material-update-without-category.input';
import { MaterialCreateWithoutCategoryInput } from './material-create-without-category.input';
export declare class MaterialUpsertWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    update: MaterialUpdateWithoutCategoryInput;
    create: MaterialCreateWithoutCategoryInput;
}
