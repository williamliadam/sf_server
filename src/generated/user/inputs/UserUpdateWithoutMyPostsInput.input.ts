import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailUpdateOneWithoutUserNestedInput } from "../../bodyDetail/inputs/BodyDetailUpdateOneWithoutUserNestedInput.input";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumRoleFieldUpdateOperationsInput } from "../../common/inputs/EnumRoleFieldUpdateOperationsInput.input";
import { MealPlanUpdateManyWithoutCreateByNestedInput } from "../../common/inputs/MealPlanUpdateManyWithoutCreateByNestedInput.input";
import { MealTemplateUpdateManyWithoutCreateByNestedInput } from "../../common/inputs/MealTemplateUpdateManyWithoutCreateByNestedInput.input";
import { NullableStringFieldUpdateOperationsInput } from "../../common/inputs/NullableStringFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { DishPlanUpdateManyWithoutPlanCookerNestedInput } from "../../dishPlan/inputs/DishPlanUpdateManyWithoutPlanCookerNestedInput.input";
import { ProfileUpdateOneWithoutUserNestedInput } from "../../profile/inputs/ProfileUpdateOneWithoutUserNestedInput.input";
import { RecipeUpdateManyWithoutAuthorNestedInput } from "../../recipe/inputs/RecipeUpdateManyWithoutAuthorNestedInput.input";

@NestJsGraphQL.InputType('UserUpdateWithoutMyPostsInput', { isAbstract: true })
export class UserUpdateWithoutMyPostsInput {
  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  phone?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  wxId?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => ProfileUpdateOneWithoutUserNestedInput, { nullable: true })
  profile?: ProfileUpdateOneWithoutUserNestedInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailUpdateOneWithoutUserNestedInput, { nullable: true })
  bodyDetail?: BodyDetailUpdateOneWithoutUserNestedInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateManyWithoutAuthorNestedInput, { nullable: true })
  myRecipes?: RecipeUpdateManyWithoutAuthorNestedInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateUpdateManyWithoutCreateByNestedInput, { nullable: true })
  myMealTemplates?: MealTemplateUpdateManyWithoutCreateByNestedInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanUpdateManyWithoutCreateByNestedInput, { nullable: true })
  myMealPlans?: MealPlanUpdateManyWithoutCreateByNestedInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanUpdateManyWithoutPlanCookerNestedInput, { nullable: true })
  chargeDishPlans?: DishPlanUpdateManyWithoutPlanCookerNestedInput | undefined;
}
