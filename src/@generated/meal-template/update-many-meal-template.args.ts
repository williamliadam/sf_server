import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MealTemplateUpdateManyMutationInput } from './meal-template-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MealTemplateWhereInput } from './meal-template-where.input';

@ArgsType()
export class UpdateManyMealTemplateArgs {

    @Field(() => MealTemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => MealTemplateUpdateManyMutationInput)
    data!: MealTemplateUpdateManyMutationInput;

    @Field(() => MealTemplateWhereInput, {nullable:true})
    @Type(() => MealTemplateWhereInput)
    where?: MealTemplateWhereInput;
}
