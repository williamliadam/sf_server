import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateCreateWithoutCreateByInput } from './meal-template-create-without-create-by.input';
import { Type } from 'class-transformer';
import { MealTemplateCreateOrConnectWithoutCreateByInput } from './meal-template-create-or-connect-without-create-by.input';
import { MealTemplateUpsertWithWhereUniqueWithoutCreateByInput } from './meal-template-upsert-with-where-unique-without-create-by.input';
import { MealTemplateCreateManyCreateByInputEnvelope } from './meal-template-create-many-create-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateUpdateWithWhereUniqueWithoutCreateByInput } from './meal-template-update-with-where-unique-without-create-by.input';
import { MealTemplateUpdateManyWithWhereWithoutCreateByInput } from './meal-template-update-many-with-where-without-create-by.input';
import { MealTemplateScalarWhereInput } from './meal-template-scalar-where.input';

@InputType()
export class MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput {

    @Field(() => [MealTemplateCreateWithoutCreateByInput], {nullable:true})
    @Type(() => MealTemplateCreateWithoutCreateByInput)
    create?: Array<MealTemplateCreateWithoutCreateByInput>;

    @Field(() => [MealTemplateCreateOrConnectWithoutCreateByInput], {nullable:true})
    @Type(() => MealTemplateCreateOrConnectWithoutCreateByInput)
    connectOrCreate?: Array<MealTemplateCreateOrConnectWithoutCreateByInput>;

    @Field(() => [MealTemplateUpsertWithWhereUniqueWithoutCreateByInput], {nullable:true})
    @Type(() => MealTemplateUpsertWithWhereUniqueWithoutCreateByInput)
    upsert?: Array<MealTemplateUpsertWithWhereUniqueWithoutCreateByInput>;

    @Field(() => MealTemplateCreateManyCreateByInputEnvelope, {nullable:true})
    @Type(() => MealTemplateCreateManyCreateByInputEnvelope)
    createMany?: MealTemplateCreateManyCreateByInputEnvelope;

    @Field(() => [MealTemplateWhereUniqueInput], {nullable:true})
    @Type(() => MealTemplateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [MealTemplateWhereUniqueInput], {nullable:true})
    @Type(() => MealTemplateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [MealTemplateWhereUniqueInput], {nullable:true})
    @Type(() => MealTemplateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [MealTemplateWhereUniqueInput], {nullable:true})
    @Type(() => MealTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [MealTemplateUpdateWithWhereUniqueWithoutCreateByInput], {nullable:true})
    @Type(() => MealTemplateUpdateWithWhereUniqueWithoutCreateByInput)
    update?: Array<MealTemplateUpdateWithWhereUniqueWithoutCreateByInput>;

    @Field(() => [MealTemplateUpdateManyWithWhereWithoutCreateByInput], {nullable:true})
    @Type(() => MealTemplateUpdateManyWithWhereWithoutCreateByInput)
    updateMany?: Array<MealTemplateUpdateManyWithWhereWithoutCreateByInput>;

    @Field(() => [MealTemplateScalarWhereInput], {nullable:true})
    @Type(() => MealTemplateScalarWhereInput)
    deleteMany?: Array<MealTemplateScalarWhereInput>;
}
