import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateCreateWithoutCreateByInput } from './meal-template-create-without-create-by.input';
import { Type } from 'class-transformer';
import { MealTemplateCreateOrConnectWithoutCreateByInput } from './meal-template-create-or-connect-without-create-by.input';
import { MealTemplateCreateManyCreateByInputEnvelope } from './meal-template-create-many-create-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';

@InputType()
export class MealTemplateCreateNestedManyWithoutCreateByInput {

    @Field(() => [MealTemplateCreateWithoutCreateByInput], {nullable:true})
    @Type(() => MealTemplateCreateWithoutCreateByInput)
    create?: Array<MealTemplateCreateWithoutCreateByInput>;

    @Field(() => [MealTemplateCreateOrConnectWithoutCreateByInput], {nullable:true})
    @Type(() => MealTemplateCreateOrConnectWithoutCreateByInput)
    connectOrCreate?: Array<MealTemplateCreateOrConnectWithoutCreateByInput>;

    @Field(() => MealTemplateCreateManyCreateByInputEnvelope, {nullable:true})
    @Type(() => MealTemplateCreateManyCreateByInputEnvelope)
    createMany?: MealTemplateCreateManyCreateByInputEnvelope;

    @Field(() => [MealTemplateWhereUniqueInput], {nullable:true})
    @Type(() => MealTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>>;
}
