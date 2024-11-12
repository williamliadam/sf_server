import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanCreateWithoutDishPlansInput.input";
import { MealPlanUpdateWithoutDishPlansInput } from "../../mealPlan/inputs/MealPlanUpdateWithoutDishPlansInput.input";

@NestJsGraphQL.InputType('MealPlanUpsertWithoutDishPlansInput', { isAbstract: true })
export class MealPlanUpsertWithoutDishPlansInput {
  @NestJsGraphQL.Field(() => MealPlanUpdateWithoutDishPlansInput)
  update!: MealPlanUpdateWithoutDishPlansInput;

  @NestJsGraphQL.Field(() => MealPlanCreateWithoutDishPlansInput)
  create!: MealPlanCreateWithoutDishPlansInput;
}
