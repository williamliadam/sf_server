import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateUpdateWithoutUsedMealTemplatesInput } from './dish-template-update-without-used-meal-templates.input';
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from './dish-template-create-without-used-meal-templates.input';
export declare class DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    update: DishTemplateUpdateWithoutUsedMealTemplatesInput;
    create: DishTemplateCreateWithoutUsedMealTemplatesInput;
}
