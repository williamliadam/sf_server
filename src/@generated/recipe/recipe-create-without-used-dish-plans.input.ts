import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMyRecipesInput } from '../user/user-create-nested-one-without-my-recipes.input';
import { IngredientCreateNestedManyWithoutUsedRecipeInput } from '../ingredient/ingredient-create-nested-many-without-used-recipe.input';
import { MethodCreateNestedManyWithoutUsedRecipeInput } from '../method/method-create-nested-many-without-used-recipe.input';
import { DishTemplateCreateNestedManyWithoutRecipeInput } from '../dish-template/dish-template-create-nested-many-without-recipe.input';

@InputType()
export class RecipeCreateWithoutUsedDishPlansInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    stars!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutMyRecipesInput, {nullable:false})
    author!: UserCreateNestedOneWithoutMyRecipesInput;

    @Field(() => IngredientCreateNestedManyWithoutUsedRecipeInput, {nullable:true})
    ingredients?: IngredientCreateNestedManyWithoutUsedRecipeInput;

    @Field(() => MethodCreateNestedManyWithoutUsedRecipeInput, {nullable:true})
    methods?: MethodCreateNestedManyWithoutUsedRecipeInput;

    @Field(() => DishTemplateCreateNestedManyWithoutRecipeInput, {nullable:true})
    usedDishTemplates?: DishTemplateCreateNestedManyWithoutRecipeInput;
}
