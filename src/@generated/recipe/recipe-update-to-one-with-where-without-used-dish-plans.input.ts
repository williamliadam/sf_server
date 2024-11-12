import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutUsedDishPlansInput } from './recipe-update-without-used-dish-plans.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutUsedDishPlansInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutUsedDishPlansInput)
    data!: RecipeUpdateWithoutUsedDishPlansInput;
}
