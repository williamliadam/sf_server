import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { DishPlanUpdateManyWithoutRecipeNestedInput } from "../../dishPlan/inputs/DishPlanUpdateManyWithoutRecipeNestedInput.input";
import { IngredientUpdateManyWithoutUsedRecipeNestedInput } from "../../ingredient/inputs/IngredientUpdateManyWithoutUsedRecipeNestedInput.input";
import { MethodUpdateManyWithoutUsedRecipeNestedInput } from "../../method/inputs/MethodUpdateManyWithoutUsedRecipeNestedInput.input";
import { UserUpdateOneRequiredWithoutMyRecipesNestedInput } from "../../user/inputs/UserUpdateOneRequiredWithoutMyRecipesNestedInput.input";

@NestJsGraphQL.InputType('RecipeUpdateWithoutUsedDishTemplatesInput', { isAbstract: true })
export class RecipeUpdateWithoutUsedDishTemplatesInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  stars?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneRequiredWithoutMyRecipesNestedInput, { nullable: true })
  author?: UserUpdateOneRequiredWithoutMyRecipesNestedInput | undefined;

  @NestJsGraphQL.Field(() => IngredientUpdateManyWithoutUsedRecipeNestedInput, { nullable: true })
  ingredients?: IngredientUpdateManyWithoutUsedRecipeNestedInput | undefined;

  @NestJsGraphQL.Field(() => MethodUpdateManyWithoutUsedRecipeNestedInput, { nullable: true })
  methods?: MethodUpdateManyWithoutUsedRecipeNestedInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanUpdateManyWithoutRecipeNestedInput, { nullable: true })
  usedDishPlans?: DishPlanUpdateManyWithoutRecipeNestedInput | undefined;
}