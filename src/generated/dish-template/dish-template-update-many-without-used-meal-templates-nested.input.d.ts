import { DishTemplateCreateWithoutUsedMealTemplatesInput } from './dish-template-create-without-used-meal-templates.input';
import { DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput } from './dish-template-create-or-connect-without-used-meal-templates.input';
import { DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput } from './dish-template-upsert-with-where-unique-without-used-meal-templates.input';
import { DishTemplateCreateManyUsedMealTemplatesInputEnvelope } from './dish-template-create-many-used-meal-templates-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput } from './dish-template-update-with-where-unique-without-used-meal-templates.input';
import { DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput } from './dish-template-update-many-with-where-without-used-meal-templates.input';
import { DishTemplateScalarWhereInput } from './dish-template-scalar-where.input';
export declare class DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput {
    create?: Array<DishTemplateCreateWithoutUsedMealTemplatesInput>;
    connectOrCreate?: Array<DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput>;
    upsert?: Array<DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput>;
    createMany?: DishTemplateCreateManyUsedMealTemplatesInputEnvelope;
    set?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
    update?: Array<DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput>;
    updateMany?: Array<DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput>;
    deleteMany?: Array<DishTemplateScalarWhereInput>;
}
