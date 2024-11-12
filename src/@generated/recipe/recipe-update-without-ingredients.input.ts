import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMyRecipesNestedInput } from '../user/user-update-one-required-without-my-recipes-nested.input';
import { MethodUpdateManyWithoutUsedRecipeNestedInput } from '../method/method-update-many-without-used-recipe-nested.input';
import { DishPlanUpdateManyWithoutRecipeNestedInput } from '../dish-plan/dish-plan-update-many-without-recipe-nested.input';
import { DishTemplateUpdateManyWithoutRecipeNestedInput } from '../dish-template/dish-template-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUpdateWithoutIngredientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stars?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutMyRecipesNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutMyRecipesNestedInput;

    @Field(() => MethodUpdateManyWithoutUsedRecipeNestedInput, {nullable:true})
    methods?: MethodUpdateManyWithoutUsedRecipeNestedInput;

    @Field(() => DishPlanUpdateManyWithoutRecipeNestedInput, {nullable:true})
    usedDishPlans?: DishPlanUpdateManyWithoutRecipeNestedInput;

    @Field(() => DishTemplateUpdateManyWithoutRecipeNestedInput, {nullable:true})
    usedDishTemplates?: DishTemplateUpdateManyWithoutRecipeNestedInput;
}
