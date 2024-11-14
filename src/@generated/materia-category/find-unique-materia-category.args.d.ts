import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
export declare class FindUniqueMateriaCategoryArgs {
    where: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
}
