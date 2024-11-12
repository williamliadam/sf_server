import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateCreateWithoutDishTemplatesInput } from './meal-template-create-without-dish-templates.input';
import { Type } from 'class-transformer';
import { MealTemplateCreateOrConnectWithoutDishTemplatesInput } from './meal-template-create-or-connect-without-dish-templates.input';
import { MealTemplateUpsertWithoutDishTemplatesInput } from './meal-template-upsert-without-dish-templates.input';
import { MealTemplateWhereInput } from './meal-template-where.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput } from './meal-template-update-to-one-with-where-without-dish-templates.input';

@InputType()
export class MealTemplateUpdateOneWithoutDishTemplatesNestedInput {

    @Field(() => MealTemplateCreateWithoutDishTemplatesInput, {nullable:true})
    @Type(() => MealTemplateCreateWithoutDishTemplatesInput)
    create?: MealTemplateCreateWithoutDishTemplatesInput;

    @Field(() => MealTemplateCreateOrConnectWithoutDishTemplatesInput, {nullable:true})
    @Type(() => MealTemplateCreateOrConnectWithoutDishTemplatesInput)
    connectOrCreate?: MealTemplateCreateOrConnectWithoutDishTemplatesInput;

    @Field(() => MealTemplateUpsertWithoutDishTemplatesInput, {nullable:true})
    @Type(() => MealTemplateUpsertWithoutDishTemplatesInput)
    upsert?: MealTemplateUpsertWithoutDishTemplatesInput;

    @Field(() => MealTemplateWhereInput, {nullable:true})
    @Type(() => MealTemplateWhereInput)
    disconnect?: MealTemplateWhereInput;

    @Field(() => MealTemplateWhereInput, {nullable:true})
    @Type(() => MealTemplateWhereInput)
    delete?: MealTemplateWhereInput;

    @Field(() => MealTemplateWhereUniqueInput, {nullable:true})
    @Type(() => MealTemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;

    @Field(() => MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput, {nullable:true})
    @Type(() => MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput)
    update?: MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput;
}
