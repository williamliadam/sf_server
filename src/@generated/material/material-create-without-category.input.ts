import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowCreateNestedManyWithoutBelongMaterialInput } from '../nutrition-row/nutrition-row-create-nested-many-without-belong-material.input';
import { IngredientCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-create-nested-many-without-material.input';

@InputType()
export class MaterialCreateWithoutCategoryInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    nickName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NutritionRowCreateNestedManyWithoutBelongMaterialInput, {nullable:true})
    nutritionMatrix?: NutritionRowCreateNestedManyWithoutBelongMaterialInput;

    @Field(() => IngredientCreateNestedManyWithoutMaterialInput, {nullable:true})
    ingredients?: IngredientCreateNestedManyWithoutMaterialInput;
}
