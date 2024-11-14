import { MealTemplateCreateWithoutDishTemplatesInput } from './meal-template-create-without-dish-templates.input';
import { MealTemplateCreateOrConnectWithoutDishTemplatesInput } from './meal-template-create-or-connect-without-dish-templates.input';
import { MealTemplateUpsertWithoutDishTemplatesInput } from './meal-template-upsert-without-dish-templates.input';
import { MealTemplateWhereInput } from './meal-template-where.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput } from './meal-template-update-to-one-with-where-without-dish-templates.input';
export declare class MealTemplateUpdateOneWithoutDishTemplatesNestedInput {
    create?: MealTemplateCreateWithoutDishTemplatesInput;
    connectOrCreate?: MealTemplateCreateOrConnectWithoutDishTemplatesInput;
    upsert?: MealTemplateUpsertWithoutDishTemplatesInput;
    disconnect?: MealTemplateWhereInput;
    delete?: MealTemplateWhereInput;
    connect?: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    update?: MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput;
}
