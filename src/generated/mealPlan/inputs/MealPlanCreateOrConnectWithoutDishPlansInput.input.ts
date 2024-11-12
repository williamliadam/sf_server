import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanCreateWithoutDishPlansInput.input";
import { MealPlanWhereUniqueInput } from "../../mealPlan/inputs/MealPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealPlanCreateOrConnectWithoutDishPlansInput', { isAbstract: true })
export class MealPlanCreateOrConnectWithoutDishPlansInput {
  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput)
  where!: MealPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealPlanCreateWithoutDishPlansInput)
  create!: MealPlanCreateWithoutDishPlansInput;
}
