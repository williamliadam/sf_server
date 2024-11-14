import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
export declare class FindUniqueMethodArgs {
    where: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
}
