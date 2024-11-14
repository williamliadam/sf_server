import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateCreateWithoutDishTemplatesInput } from './meal-template-create-without-dish-templates.input';
export declare class MealTemplateCreateOrConnectWithoutDishTemplatesInput {
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    create: MealTemplateCreateWithoutDishTemplatesInput;
}
