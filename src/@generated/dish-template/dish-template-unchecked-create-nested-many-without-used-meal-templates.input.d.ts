import { DishTemplateCreateWithoutUsedMealTemplatesInput } from './dish-template-create-without-used-meal-templates.input';
import { DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput } from './dish-template-create-or-connect-without-used-meal-templates.input';
import { DishTemplateCreateManyUsedMealTemplatesInputEnvelope } from './dish-template-create-many-used-meal-templates-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
export declare class DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput {
    create?: Array<DishTemplateCreateWithoutUsedMealTemplatesInput>;
    connectOrCreate?: Array<DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput>;
    createMany?: DishTemplateCreateManyUsedMealTemplatesInputEnvelope;
    connect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
}
