import { DishTemplateUpdateInput } from './dish-template-update.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
export declare class UpdateOneDishTemplateArgs {
    data: DishTemplateUpdateInput;
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
}
