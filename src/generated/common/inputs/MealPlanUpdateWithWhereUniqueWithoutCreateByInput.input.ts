import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanWhereUniqueInput } from "../../mealPlan/inputs/MealPlanWhereUniqueInput.input";
import { MealPlanUpdateWithoutCreateByInput } from "./MealPlanUpdateWithoutCreateByInput.input";

@NestJsGraphQL.InputType('MealPlanUpdateWithWhereUniqueWithoutCreateByInput', { isAbstract: true })
export class MealPlanUpdateWithWhereUniqueWithoutCreateByInput {
  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput)
  where!: MealPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealPlanUpdateWithoutCreateByInput)
  data!: MealPlanUpdateWithoutCreateByInput;
}
