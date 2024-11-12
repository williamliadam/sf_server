import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealTemplateCreateManyInput } from './meal-template-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMealTemplateArgs {

    @Field(() => [MealTemplateCreateManyInput], {nullable:false})
    @Type(() => MealTemplateCreateManyInput)
    data!: Array<MealTemplateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
