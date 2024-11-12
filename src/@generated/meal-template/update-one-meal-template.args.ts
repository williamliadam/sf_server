import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealTemplateUpdateInput } from './meal-template-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';

@ArgsType()
export class UpdateOneMealTemplateArgs {

    @Field(() => MealTemplateUpdateInput, {nullable:false})
    @Type(() => MealTemplateUpdateInput)
    data!: MealTemplateUpdateInput;

    @Field(() => MealTemplateWhereUniqueInput, {nullable:false})
    @Type(() => MealTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
}
