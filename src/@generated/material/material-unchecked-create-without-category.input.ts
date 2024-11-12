import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput } from '../nutrition-row/nutrition-row-unchecked-create-nested-many-without-belong-material.input';
import { IngredientUncheckedCreateNestedManyWithoutMaterialInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-material.input';

@InputType()
export class MaterialUncheckedCreateWithoutCategoryInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput, {nullable:true})
    nutritionMatrix?: NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput;

    @Field(() => IngredientUncheckedCreateNestedManyWithoutMaterialInput, {nullable:true})
    ingredients?: IngredientUncheckedCreateNestedManyWithoutMaterialInput;
}
