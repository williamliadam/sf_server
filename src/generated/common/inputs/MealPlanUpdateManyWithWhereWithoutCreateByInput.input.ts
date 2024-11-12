import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanScalarWhereInput } from "../../mealPlan/inputs/MealPlanScalarWhereInput.input";
import { MealPlanUpdateManyMutationInput } from "../../mealPlan/inputs/MealPlanUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('MealPlanUpdateManyWithWhereWithoutCreateByInput', { isAbstract: true })
export class MealPlanUpdateManyWithWhereWithoutCreateByInput {
  @NestJsGraphQL.Field(() => MealPlanScalarWhereInput)
  where!: MealPlanScalarWhereInput;

  @NestJsGraphQL.Field(() => MealPlanUpdateManyMutationInput)
  data!: MealPlanUpdateManyMutationInput;
}
