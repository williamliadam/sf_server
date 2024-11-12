import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { Type } from 'class-transformer';
import { DishTemplateUpdateWithoutUsedMealTemplatesInput } from './dish-template-update-without-used-meal-templates.input';

@InputType()
export class DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput {

    @Field(() => DishTemplateWhereUniqueInput, {nullable:false})
    @Type(() => DishTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;

    @Field(() => DishTemplateUpdateWithoutUsedMealTemplatesInput, {nullable:false})
    @Type(() => DishTemplateUpdateWithoutUsedMealTemplatesInput)
    data!: DishTemplateUpdateWithoutUsedMealTemplatesInput;
}
