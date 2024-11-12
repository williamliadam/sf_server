import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput } from "../../materiaUnit/inputs/MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput.input";
import { RecipeUpdateOneWithoutIngredientsNestedInput } from "../../recipe/inputs/RecipeUpdateOneWithoutIngredientsNestedInput.input";

@NestJsGraphQL.InputType('IngredientUpdateWithoutMaterialInput', { isAbstract: true })
export class IngredientUpdateWithoutMaterialInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput, { nullable: true })
  unit?: MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateOneWithoutIngredientsNestedInput, { nullable: true })
  usedRecipe?: RecipeUpdateOneWithoutIngredientsNestedInput | undefined;
}
