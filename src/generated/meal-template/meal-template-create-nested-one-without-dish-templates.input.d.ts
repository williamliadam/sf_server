import { MealTemplateCreateWithoutDishTemplatesInput } from './meal-template-create-without-dish-templates.input';
import { MealTemplateCreateOrConnectWithoutDishTemplatesInput } from './meal-template-create-or-connect-without-dish-templates.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
export declare class MealTemplateCreateNestedOneWithoutDishTemplatesInput {
    create?: MealTemplateCreateWithoutDishTemplatesInput;
    connectOrCreate?: MealTemplateCreateOrConnectWithoutDishTemplatesInput;
    connect?: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
}
