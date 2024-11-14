import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateWithoutCategoryInput } from './material-update-without-category.input';
export declare class MaterialUpdateWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    data: MaterialUpdateWithoutCategoryInput;
}
