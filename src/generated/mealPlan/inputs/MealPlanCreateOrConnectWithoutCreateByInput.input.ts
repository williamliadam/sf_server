import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateWithoutCreateByInput } from "../../mealPlan/inputs/MealPlanCreateWithoutCreateByInput.input";
import { MealPlanWhereUniqueInput } from "../../mealPlan/inputs/MealPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealPlanCreateOrConnectWithoutCreateByInput', { isAbstract: true })
export class MealPlanCreateOrConnectWithoutCreateByInput {
  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput)
  where!: MealPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealPlanCreateWithoutCreateByInput)
  create!: MealPlanCreateWithoutCreateByInput;
}
