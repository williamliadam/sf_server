import { MealTemplateCreateWithoutCreateByInput } from './meal-template-create-without-create-by.input';
import { MealTemplateCreateOrConnectWithoutCreateByInput } from './meal-template-create-or-connect-without-create-by.input';
import { MealTemplateUpsertWithWhereUniqueWithoutCreateByInput } from './meal-template-upsert-with-where-unique-without-create-by.input';
import { MealTemplateCreateManyCreateByInputEnvelope } from './meal-template-create-many-create-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateUpdateWithWhereUniqueWithoutCreateByInput } from './meal-template-update-with-where-unique-without-create-by.input';
import { MealTemplateUpdateManyWithWhereWithoutCreateByInput } from './meal-template-update-many-with-where-without-create-by.input';
import { MealTemplateScalarWhereInput } from './meal-template-scalar-where.input';
export declare class MealTemplateUpdateManyWithoutCreateByNestedInput {
    create?: Array<MealTemplateCreateWithoutCreateByInput>;
    connectOrCreate?: Array<MealTemplateCreateOrConnectWithoutCreateByInput>;
    upsert?: Array<MealTemplateUpsertWithWhereUniqueWithoutCreateByInput>;
    createMany?: MealTemplateCreateManyCreateByInputEnvelope;
    set?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;
    update?: Array<MealTemplateUpdateWithWhereUniqueWithoutCreateByInput>;
    updateMany?: Array<MealTemplateUpdateManyWithWhereWithoutCreateByInput>;
    deleteMany?: Array<MealTemplateScalarWhereInput>;
}
