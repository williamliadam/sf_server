import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
export declare class FindUniqueDishTemplateOrThrowArgs {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
}
