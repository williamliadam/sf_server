import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { BodyDetailUpdateOneWithoutUserNestedInput } from '../body-detail/body-detail-update-one-without-user-nested.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
import { RecipeUpdateManyWithoutAuthorNestedInput } from '../recipe/recipe-update-many-without-author-nested.input';
import { MealTemplateUpdateManyWithoutCreateByNestedInput } from '../meal-template/meal-template-update-many-without-create-by-nested.input';
import { MealPlanUpdateManyWithoutCreateByNestedInput } from '../meal-plan/meal-plan-update-many-without-create-by-nested.input';
import { DishPlanUpdateManyWithoutPlanCookerNestedInput } from '../dish-plan/dish-plan-update-many-without-plan-cooker-nested.input';

@InputType()
export class UserUpdateWithoutProfileInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    wxId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => BodyDetailUpdateOneWithoutUserNestedInput, {nullable:true})
    bodyDetail?: BodyDetailUpdateOneWithoutUserNestedInput;

    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    myPosts?: PostUpdateManyWithoutAuthorNestedInput;

    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    myRecipes?: RecipeUpdateManyWithoutAuthorNestedInput;

    @Field(() => MealTemplateUpdateManyWithoutCreateByNestedInput, {nullable:true})
    myMealTemplates?: MealTemplateUpdateManyWithoutCreateByNestedInput;

    @Field(() => MealPlanUpdateManyWithoutCreateByNestedInput, {nullable:true})
    myMealPlans?: MealPlanUpdateManyWithoutCreateByNestedInput;

    @Field(() => DishPlanUpdateManyWithoutPlanCookerNestedInput, {nullable:true})
    chargeDishPlans?: DishPlanUpdateManyWithoutPlanCookerNestedInput;
}
