import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutUsedDishTemplatesInput } from './recipe-update-without-used-dish-templates.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutUsedDishTemplatesInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutUsedDishTemplatesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutUsedDishTemplatesInput)
    data!: RecipeUpdateWithoutUsedDishTemplatesInput;
}
