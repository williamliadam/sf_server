import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateCreateManyUsedMealTemplatesInput } from './dish-template-create-many-used-meal-templates.input';
import { Type } from 'class-transformer';

@InputType()
export class DishTemplateCreateManyUsedMealTemplatesInputEnvelope {

    @Field(() => [DishTemplateCreateManyUsedMealTemplatesInput], {nullable:false})
    @Type(() => DishTemplateCreateManyUsedMealTemplatesInput)
    data!: Array<DishTemplateCreateManyUsedMealTemplatesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
