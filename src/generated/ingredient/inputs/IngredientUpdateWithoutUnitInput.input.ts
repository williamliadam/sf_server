import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { MaterialUpdateOneRequiredWithoutIngredientsNestedInput } from "../../material/inputs/MaterialUpdateOneRequiredWithoutIngredientsNestedInput.input";
import { RecipeUpdateOneWithoutIngredientsNestedInput } from "../../recipe/inputs/RecipeUpdateOneWithoutIngredientsNestedInput.input";

@NestJsGraphQL.InputType('IngredientUpdateWithoutUnitInput', { isAbstract: true })
export class IngredientUpdateWithoutUnitInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpdateOneRequiredWithoutIngredientsNestedInput, { nullable: true })
  material?: MaterialUpdateOneRequiredWithoutIngredientsNestedInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateOneWithoutIngredientsNestedInput, { nullable: true })
  usedRecipe?: RecipeUpdateOneWithoutIngredientsNestedInput | undefined;
}
