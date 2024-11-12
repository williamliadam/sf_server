import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateCreateWithoutRecipeInput } from './dish-template-create-without-recipe.input';
import { Type } from 'class-transformer';
import { DishTemplateCreateOrConnectWithoutRecipeInput } from './dish-template-create-or-connect-without-recipe.input';
import { DishTemplateCreateManyRecipeInputEnvelope } from './dish-template-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';

@InputType()
export class DishTemplateCreateNestedManyWithoutRecipeInput {

    @Field(() => [DishTemplateCreateWithoutRecipeInput], {nullable:true})
    @Type(() => DishTemplateCreateWithoutRecipeInput)
    create?: Array<DishTemplateCreateWithoutRecipeInput>;

    @Field(() => [DishTemplateCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => DishTemplateCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<DishTemplateCreateOrConnectWithoutRecipeInput>;

    @Field(() => DishTemplateCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => DishTemplateCreateManyRecipeInputEnvelope)
    createMany?: DishTemplateCreateManyRecipeInputEnvelope;

    @Field(() => [DishTemplateWhereUniqueInput], {nullable:true})
    @Type(() => DishTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
}
