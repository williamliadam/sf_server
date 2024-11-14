import { MealTemplateCreateWithoutCreateByInput } from './meal-template-create-without-create-by.input';
import { MealTemplateCreateOrConnectWithoutCreateByInput } from './meal-template-create-or-connect-without-create-by.input';
import { MealTemplateCreateManyCreateByInputEnvelope } from './meal-template-create-many-create-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
export declare class MealTemplateCreateNestedManyWithoutCreateByInput {
    create?: Array<MealTemplateCreateWithoutCreateByInput>;
    connectOrCreate?: Array<MealTemplateCreateOrConnectWithoutCreateByInput>;
    createMany?: MealTemplateCreateManyCreateByInputEnvelope;
    connect?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;
}
