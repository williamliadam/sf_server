import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from './dish-template-create-without-used-meal-templates.input';
export declare class DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    create: DishTemplateCreateWithoutUsedMealTemplatesInput;
}
