import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTemplateUpdateInput } from './dish-template-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';

@ArgsType()
export class UpdateOneDishTemplateArgs {

    @Field(() => DishTemplateUpdateInput, {nullable:false})
    @Type(() => DishTemplateUpdateInput)
    data!: DishTemplateUpdateInput;

    @Field(() => DishTemplateWhereUniqueInput, {nullable:false})
    @Type(() => DishTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
}
