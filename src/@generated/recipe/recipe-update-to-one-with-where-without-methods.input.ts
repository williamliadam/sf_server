import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutMethodsInput } from './recipe-update-without-methods.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutMethodsInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutMethodsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutMethodsInput)
    data!: RecipeUpdateWithoutMethodsInput;
}
