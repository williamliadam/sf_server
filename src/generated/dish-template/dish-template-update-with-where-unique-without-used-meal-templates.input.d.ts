import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateUpdateWithoutUsedMealTemplatesInput } from './dish-template-update-without-used-meal-templates.input';
export declare class DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    data: DishTemplateUpdateWithoutUsedMealTemplatesInput;
}
