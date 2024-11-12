import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowScalarWhereInput } from "../../nutritionRow/inputs/NutritionRowScalarWhereInput.input";
import { NutritionRowUpdateManyMutationInput } from "../../nutritionRow/inputs/NutritionRowUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput', { isAbstract: true })
export class NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput {
  @NestJsGraphQL.Field(() => NutritionRowScalarWhereInput)
  where!: NutritionRowScalarWhereInput;

  @NestJsGraphQL.Field(() => NutritionRowUpdateManyMutationInput)
  data!: NutritionRowUpdateManyMutationInput;
}
