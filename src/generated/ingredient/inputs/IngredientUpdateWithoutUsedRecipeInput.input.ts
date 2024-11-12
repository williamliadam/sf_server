import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";
import { MaterialUpdateOneRequiredWithoutIngredientsNestedInput } from "../../material/inputs/MaterialUpdateOneRequiredWithoutIngredientsNestedInput.input";
import { MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput } from "../../materiaUnit/inputs/MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput.input";

@NestJsGraphQL.InputType('IngredientUpdateWithoutUsedRecipeInput', { isAbstract: true })
export class IngredientUpdateWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpdateOneRequiredWithoutIngredientsNestedInput, { nullable: true })
  material?: MaterialUpdateOneRequiredWithoutIngredientsNestedInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput, { nullable: true })
  unit?: MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput | undefined;
}
