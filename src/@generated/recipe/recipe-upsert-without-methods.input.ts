import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutMethodsInput } from './recipe-update-without-methods.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutMethodsInput } from './recipe-create-without-methods.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutMethodsInput {

    @Field(() => RecipeUpdateWithoutMethodsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutMethodsInput)
    update!: RecipeUpdateWithoutMethodsInput;

    @Field(() => RecipeCreateWithoutMethodsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutMethodsInput)
    create!: RecipeCreateWithoutMethodsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
