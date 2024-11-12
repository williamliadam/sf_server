import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowScalarWhereInput } from "../../nutritionRow/inputs/NutritionRowScalarWhereInput.input";
import { NutritionRowUpdateManyMutationInput } from "../../nutritionRow/inputs/NutritionRowUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('NutritionRowUpdateManyWithWhereWithoutNutirtionInput', { isAbstract: true })
export class NutritionRowUpdateManyWithWhereWithoutNutirtionInput {
  @NestJsGraphQL.Field(() => NutritionRowScalarWhereInput)
  where!: NutritionRowScalarWhereInput;

  @NestJsGraphQL.Field(() => NutritionRowUpdateManyMutationInput)
  data!: NutritionRowUpdateManyMutationInput;
}
