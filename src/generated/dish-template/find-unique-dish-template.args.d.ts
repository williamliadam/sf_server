import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
export declare class FindUniqueDishTemplateArgs {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
}
