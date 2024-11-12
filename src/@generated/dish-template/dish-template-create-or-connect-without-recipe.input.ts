import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { Type } from 'class-transformer';
import { DishTemplateCreateWithoutRecipeInput } from './dish-template-create-without-recipe.input';

@InputType()
export class DishTemplateCreateOrConnectWithoutRecipeInput {

    @Field(() => DishTemplateWhereUniqueInput, {nullable:false})
    @Type(() => DishTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;

    @Field(() => DishTemplateCreateWithoutRecipeInput, {nullable:false})
    @Type(() => DishTemplateCreateWithoutRecipeInput)
    create!: DishTemplateCreateWithoutRecipeInput;
}
