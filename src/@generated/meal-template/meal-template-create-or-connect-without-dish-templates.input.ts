import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { Type } from 'class-transformer';
import { MealTemplateCreateWithoutDishTemplatesInput } from './meal-template-create-without-dish-templates.input';

@InputType()
export class MealTemplateCreateOrConnectWithoutDishTemplatesInput {

    @Field(() => MealTemplateWhereUniqueInput, {nullable:false})
    @Type(() => MealTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;

    @Field(() => MealTemplateCreateWithoutDishTemplatesInput, {nullable:false})
    @Type(() => MealTemplateCreateWithoutDishTemplatesInput)
    create!: MealTemplateCreateWithoutDishTemplatesInput;
}
