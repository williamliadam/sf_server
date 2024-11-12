import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { Type } from 'class-transformer';
import { MealTemplateCreateInput } from './meal-template-create.input';
import { MealTemplateUpdateInput } from './meal-template-update.input';

@ArgsType()
export class UpsertOneMealTemplateArgs {

    @Field(() => MealTemplateWhereUniqueInput, {nullable:false})
    @Type(() => MealTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;

    @Field(() => MealTemplateCreateInput, {nullable:false})
    @Type(() => MealTemplateCreateInput)
    create!: MealTemplateCreateInput;

    @Field(() => MealTemplateUpdateInput, {nullable:false})
    @Type(() => MealTemplateUpdateInput)
    update!: MealTemplateUpdateInput;
}
