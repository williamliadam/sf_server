import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutUsedDishPlansInput } from './recipe-update-without-used-dish-plans.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutUsedDishPlansInput } from './recipe-create-without-used-dish-plans.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutUsedDishPlansInput {

    @Field(() => RecipeUpdateWithoutUsedDishPlansInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutUsedDishPlansInput)
    update!: RecipeUpdateWithoutUsedDishPlansInput;

    @Field(() => RecipeCreateWithoutUsedDishPlansInput, {nullable:false})
    @Type(() => RecipeCreateWithoutUsedDishPlansInput)
    create!: RecipeCreateWithoutUsedDishPlansInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
