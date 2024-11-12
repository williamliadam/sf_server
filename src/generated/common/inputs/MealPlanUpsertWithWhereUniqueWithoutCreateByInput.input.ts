import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateWithoutCreateByInput } from "../../mealPlan/inputs/MealPlanCreateWithoutCreateByInput.input";
import { MealPlanWhereUniqueInput } from "../../mealPlan/inputs/MealPlanWhereUniqueInput.input";
import { MealPlanUpdateWithoutCreateByInput } from "./MealPlanUpdateWithoutCreateByInput.input";

@NestJsGraphQL.InputType('MealPlanUpsertWithWhereUniqueWithoutCreateByInput', { isAbstract: true })
export class MealPlanUpsertWithWhereUniqueWithoutCreateByInput {
  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput)
  where!: MealPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealPlanUpdateWithoutCreateByInput)
  update!: MealPlanUpdateWithoutCreateByInput;

  @NestJsGraphQL.Field(() => MealPlanCreateWithoutCreateByInput)
  create!: MealPlanCreateWithoutCreateByInput;
}
