import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeUpdateManyMutationInput } from './recipe-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeWhereInput } from './recipe-where.input';

@ArgsType()
export class UpdateManyRecipeArgs {

    @Field(() => RecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeUpdateManyMutationInput)
    data!: RecipeUpdateManyMutationInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
