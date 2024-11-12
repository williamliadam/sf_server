import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientScalarWhereInput } from './ingredient-scalar-where.input';
import { Type } from 'class-transformer';
import { IngredientUpdateManyMutationInput } from './ingredient-update-many-mutation.input';

@InputType()
export class IngredientUpdateManyWithWhereWithoutUnitInput {

    @Field(() => IngredientScalarWhereInput, {nullable:false})
    @Type(() => IngredientScalarWhereInput)
    where!: IngredientScalarWhereInput;

    @Field(() => IngredientUpdateManyMutationInput, {nullable:false})
    @Type(() => IngredientUpdateManyMutationInput)
    data!: IngredientUpdateManyMutationInput;
}
