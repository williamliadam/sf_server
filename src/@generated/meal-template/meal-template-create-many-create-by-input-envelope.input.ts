import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateCreateManyCreateByInput } from './meal-template-create-many-create-by.input';
import { Type } from 'class-transformer';

@InputType()
export class MealTemplateCreateManyCreateByInputEnvelope {

    @Field(() => [MealTemplateCreateManyCreateByInput], {nullable:false})
    @Type(() => MealTemplateCreateManyCreateByInput)
    data!: Array<MealTemplateCreateManyCreateByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
