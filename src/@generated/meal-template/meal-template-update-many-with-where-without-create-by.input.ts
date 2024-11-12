import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealTemplateScalarWhereInput } from './meal-template-scalar-where.input';
import { Type } from 'class-transformer';
import { MealTemplateUpdateManyMutationInput } from './meal-template-update-many-mutation.input';

@InputType()
export class MealTemplateUpdateManyWithWhereWithoutCreateByInput {

    @Field(() => MealTemplateScalarWhereInput, {nullable:false})
    @Type(() => MealTemplateScalarWhereInput)
    where!: MealTemplateScalarWhereInput;

    @Field(() => MealTemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => MealTemplateUpdateManyMutationInput)
    data!: MealTemplateUpdateManyMutationInput;
}
